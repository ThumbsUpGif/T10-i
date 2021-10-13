console.log('hello world')

console.log()

// inView.offset(50);

inView('.section')
    .on('enter', section => {
        section.classList.add('in-viewport')
    })
    .on('exit', section => {
        section.classList.remove('in-viewport')
    });

inView.threshold(0.2)
