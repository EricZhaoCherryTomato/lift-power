const calculateBlock = (command) => {
    const blockContainer = Array(10).fill(0);
    // console.log(blockContainer);
    if (command === '') return 'Empty command is not allowed';
    var steps = command.split("");
    var index = 0;
    steps.map(step => {
        console.log(step);
        switch (step) {
            case 'P':
                index = 0;
                break;
            case 'M':
                index++;
                break;
            case 'L':
                console.log(index);
                blockContainer[index]++;
                break;
            default:
                console.log(index);
        }
        console.log(index);
        console.log(blockContainer.map((block => block.toString(16).toUpperCase())).join(''));

    })
    return blockContainer.map((block => block.toString(16).toUpperCase())).join('');
}
export default calculateBlock;