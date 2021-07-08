let recorder;
let stream;
let currentStep = 0;

// Recorder
const initRecordingButton = document.getElementById('init-recording-button');
const startRecordingButton = document.getElementById('start-recording-button');
const repeatRecordingButton = document.getElementById('repeat-recording-button');
const stopRecordingButton = document.getElementById('stop-recording-button');
const uploadRecordingButton = document.getElementById('upload-recording-button');

const stepTitle = document.querySelector('.frame__title');
const stepSubtitle = document.querySelector('.frame__desc');
const timer = document.querySelector('.record__subtext');
const stepsNumber = document.getElementsByClassName('record__stepBox');
const video = document.getElementById('video');
const recordedGif = document.getElementById('jsGif');


// ============================================================================
//     INITILIZE RECORDING THINGIS
// ============================================================================


initRecordingButton.addEventListener('click', nextStepHandler);

async function nextStepHandler() {
    if (currentStep === 0) {
        initRecordingButton.className = setClassName.record.initButton.whenInactive;
        stepsNumber[currentStep].className = setClassName.record.steps.whenActive;
        stepTitle.innerHTML = '¿Nos das acceso <br> a tu cámara ?';
        stepSubtitle.innerHTML = 'El acceso a tu camara será válido sólo <br> por el tiempo en el que estés creando el GIFO.';
        await getStreamFromRecordRTC();
        if (stream.active) {
            stepSubtitle.className = setClassName.record.subtitle.whenInactive;
            stepTitle.className = setClassName.record.title.whenInactive;
            video.className = setClassName.record.video.default;
            stepsNumber[currentStep].className = setClassName.record.steps.default;
            currentStep++;
            stepsNumber[currentStep].className = setClassName.record.steps.whenActive;
            startRecordingButton.className = setClassName.record.startButton.default;
        }
    }
    if (currentStep === 3) {
        currentStep = 0;
        stepsNumber[2].className = setClassName.record.steps.default;
    } else if (currentStep !== 0) {
        stepsNumber[currentStep - 1].className = setClassName.record.steps.default;
    }

    currentStep++;
}

async function getStreamFromRecordRTC() {
    stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            width: 640,
            height: 340
        },
        canvas: {
            width: 320,
            height: 240
        },
        frameRate: 60,
        videoBitsPerSecond: 51200000,
    });
    video.srcObject = stream;
    video.play();
    recorder = new RecordRTC(stream, { type: 'gif' });

}

// Record video

startRecordingButton.addEventListener('click', startRecordingHandler);
stopRecordingButton.addEventListener('click', stopRecordingHandler);

function startRecordingHandler() {
    recorder.startRecording();
    startRecordingButton.className = setClassName.record.startButton.whenInactive;
    stopRecordingButton.className = setClassName.record.stopButton.default;
    timer.className = setClassName.record.timer.whenRecording;
    timeCounter.start();
}


async function stopRecordingHandler() {
    timeCounter.stop();
    await recorder.stopRecording();
    let blob = recorder.getBlob();
    let url = window.URL.createObjectURL(blob);
    recordedGif.src = url;
    video.className = setClassName.record.video.afterRecording;
    timer.className = setClassName.record.timer.default;
    recordedGif.className = setClassName.record.gif.default;
    repeatRecordingButton.className = setClassName.record.repeatButton.default;
    stopRecordingButton.className = setClassName.record.stopButton.whenInactive;
    uploadRecordingButton.className = setClassName.record.uploadButton.default;
    uploadRecordingButton.addEventListener('click', async () => {
        const form = new FormData();
        form.append('file', blob, 'myGif.gif');
        const resp = await fetch(URL_UPLOAD + API_KEY, {
            method: 'POST',
            body: form
        });
        const result = await resp.json();
        const gifoID = result.data.id;
        GIFOS.push(gifoID);
        db.setMyGifos(GIFOS);
        const response = await fetchToJson(URL_BY_ID + gifoID + API_KEY);
        const gif = response.data;
        console.log(gif);
        // document.getElementsByTagName('body')[0].appendChild(gif.)
        console.log(db.get('gifos'));
    });
}

repeatRecordingButton.addEventListener('click',async () => {
    await getStreamFromRecordRTC();
    timeCounter.stop();
    timer.textContent = '00:00:00';
    video.className = setClassName.record.video.default;
    recordedGif.className = setClassName.record.gif.whenRepeating;
    stopRecordingButton.className = setClassName.record.stopButton.whenInactive;
    startRecordingButton.className = setClassName.record.startButton.default
    repeatRecordingButton.className = setClassName.record.repeatButton.whenInactive;
    uploadRecordingButton.className = setClassName.record.repeatButton.whenInactive;
});
