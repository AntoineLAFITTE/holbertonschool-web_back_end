console.log("Welcome to Holberton School, what is your name?");

process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    console.log(`Your name is: ${name}`);

    // Cleanly end stdin listening after user input
    process.stdin.end();
});

process.stdin.on('end', () => {
    console.log("This important software is now closing");
});
