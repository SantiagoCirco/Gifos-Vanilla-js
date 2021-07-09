// ============================================================================
//     INITILIZE RECORDING THINGIS
// ============================================================================

async function initializeRecording() {
    if (currentStep === 0) {
        showFirstStepElements();
        await setupRecordingAndEnableSecondStep();
    }
    if (currentStep === 3) {
        showFinalStepElements();
    } else if (currentStep !== 0) {
        stepsNumber[currentStep - 1].className = setClassName.record.steps.default;
    }
    currentStep++;
}

async function setupRecordingAndEnableSecondStep() {
    const stream = await getStreamFromRecordRTC();
    video.srcObject = stream;
    video.play();
    recorder = new RecordRTC(stream, { type: 'gif' });
    stream.active && showSecondStepElements();
}

function showFinalStepElements() {
    currentStep = 0;
    stepsNumber[2].className = setClassName.record.steps.default;
}

function showFirstStepElements() {
    initRecordingButton.className = setClassName.record.initButton.whenInactive;
    stepsNumber[currentStep].className = setClassName.record.steps.whenActive;
    stepTitle.innerHTML = '¿Nos das acceso <br> a tu cámara ?';
    stepSubtitle.innerHTML = 'El acceso a tu camara será válido sólo <br> por el tiempo en el que estés creando el GIFO.';
}

function showSecondStepElements() {
    stepSubtitle.className = setClassName.record.subtitle.whenInactive;
    stepTitle.className = setClassName.record.title.whenInactive;
    video.className = setClassName.record.video.default;
    stepsNumber[currentStep].className = setClassName.record.steps.default;
    currentStep++;
    stepsNumber[currentStep].className = setClassName.record.steps.whenActive;
    startRecordingButton.className = setClassName.record.startButton.default;
}

async function getStreamFromRecordRTC() {
    return await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            width: 480,
            height: 320
        },
        canvas: {
            width: 320,
            height: 240
        },
        frameRate: 60,
        videoBitsPerSecond: 51200000,
    });


}

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
    uploadRecordingButton.addEventListener('click', async (e) => {
        recordFinishLoadingBox.className = setClassName.record.finish.whenUploading;
        recordFinishButtonBox.className = setClassName.record.finish.buttons.default;
        const form = new FormData();
        form.append('file', blob, 'myGif.gif');
        const resp = await fetch(URL_UPLOAD + API_KEY, {
            method: 'POST',
            body: form
        });
        const result = await resp.json();
        setTimeout(() => {
            recordFinishLoadingText.textContent = '¡el GIFO fue cargado con éxito!';
            recordLoadingIcon.className = setClassName.record.finish.loader.default;
            recordFinishButtonBox.className = setClassName.record.finish.buttons.whenLoaded;
            recordCheckIcon.className = setClassName.record.finish.check.whenFinished;
        }, 500);
        const gifoID = result.data.id;
        recordLinkButton.id = 'record-link-button' + gifoID;
        recordLinkIcon.id = 'record-link-icon' + gifoID;
        recordDownloadButton.id = 'record-download-button' + gifoID;
        recordDownloadIcon.id = 'record-download-icon' + gifoID;
        GIFOS.push(gifoID);
        db.setMyGifos(GIFOS);
        const response = await fetchToJson(URL_BY_ID + gifoID + API_KEY);
    });
}

async function repeatRecordingHandler() {
    await getStreamFromRecordRTC();
    timeCounter.stop();
    timer.textContent = '00:00:00';
    video.className = setClassName.record.video.default;
    recordedGif.className = setClassName.record.gif.whenRepeating;
    stopRecordingButton.className = setClassName.record.stopButton.whenInactive;
    startRecordingButton.className = setClassName.record.startButton.default;
    repeatRecordingButton.className = setClassName.record.repeatButton.whenInactive;
    uploadRecordingButton.className = setClassName.record.repeatButton.whenInactive;
    const stream = await getStreamFromRecordRTC();
    video.srcObject = stream;
    video.play();
    recorder = new RecordRTC(stream, { type: 'gif' });
}


recordDownloadButton.addEventListener('click', downloadNewGif);
recordDownloadIcon.addEventListener('click', downloadNewGif);
recordLinkButton.addEventListener('click', goToGifWindow );
recordLinkIcon.addEventListener('click', goToGifWindow);

initRecordingButton.addEventListener('click', initializeRecording);
startRecordingButton.addEventListener('click', startRecordingHandler);
stopRecordingButton.addEventListener('click', stopRecordingHandler);
repeatRecordingButton.addEventListener('click', repeatRecordingHandler);

function downloadNewGif(e) {
    e.stopPropagation();
    const id = e.target.id.replace(e.target.classList[2], '');
    downloadGifById(id);
}

async function goToGifWindow(e) {
    e.stopPropagation();
    const id = e.target.id.replace(e.target.classList[2], '');
    const result = await fetchToJson(URL_BY_ID + id + API_KEY);
    const url = result.data.url;
    window.open(url, '_blank');
}

