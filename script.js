function redactText() {
    const inputText = document.getElementById("inputText").value;
    const redactWords = document.getElementById("redactWords").value.split(" ");
    
    let redactedText = inputText;

    for (const word of redactWords) {
        const regex = new RegExp(word, "gi"); // "gi" for case-insensitive and global matching
        redactedText = redactedText.replace(regex, '*'.repeat(word.length));
    }

    document.getElementById("redactedText").textContent = redactedText;
}
