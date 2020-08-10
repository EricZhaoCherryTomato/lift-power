const calculateBlock = (command) => {
    if (command === '') return 'Empty command is not allowed';
    return command + 1;
}
export default calculateBlock;