const calculateBlock = (command) => {
    const blockContainer = Array(10).fill(0);
    if (command === '') return 'Empty command is not allowed';
    var steps = command.split("");
    var index = 0;
    var isLoaded = false;
    steps.forEach(step => {
        // console.log(step);
        switch (step) {
            case 'P':
                index = 0;
                isLoaded = true;
                break;
            case 'M':
                index++;
                break;
            case 'L':
                // console.log(index);
                if (isLoaded && index < 10) blockContainer[index]++;
                break;
            default:
                console.log(index);
        }
        // console.log(index);
        // console.log(blockContainer.map((block) => { if (block > 15) { return 'F' } block.toString(16).toUpperCase() }).join(''));

    })

    const cleanBlockConatiner = blockContainer.map((block) => {
        if (block > 15) block = 15;
        // console.log('new block', block)
        return block;
    });
    // console.log(cleanBlockConatiner);
    return cleanBlockConatiner.map((block => block.toString(16).toUpperCase())).join('');
}
export default calculateBlock;