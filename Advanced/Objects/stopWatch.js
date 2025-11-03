function StopWatch() {
    let start = new Date();
    let end = new Date();
    this.duration = 0;
    this.start = function () {
        if (this.duration > 0)
            throw new Error('Stopwatch has already started.');
        this.duration = start.getMilliseconds();
    };
    this.stop = function () {
        if (this.duration === 0)
            throw new Error('Stopwatch is not started.');
    };
    this.reset = function () {
        this.duration = 0;
    }
}

//Pro:
function StopWatch2() {
    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (running)
            throw new Error('Stopwatch has already started.');
        running = true;
        startTime = new Date();
    };

    this.stop = function () {
        if (!running)
            throw new Error('Stopwatch is not started.');
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        },
    })

}

const sw = new StopWatch2();
sw.start();
console.log('Cronómetro iniciado...');

setTimeout(() => {
    sw.stop();
    console.log('Duración:', sw.duration, 'segundos');
}, 3000);