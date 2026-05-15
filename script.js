const arrayContainer = document.getElementById("array-container");

const linearBtn = document.getElementById("linearBtn");
const binaryBtn = document.getElementById("binaryBtn");
const quickBtn = document.getElementById("quickBtn");

const startBtn = document.getElementById("startBtn");

const inputPanel = document.getElementById("inputPanel");

const arrayInput = document.getElementById("arrayInput");
const targetInput = document.getElementById("targetInput");


let currentAlgorithm = "";

function selectAlgorithm(algorithm) {
    // remove previous active button
    linearBtn.classList.remove("active-btn");
    binaryBtn.classList.remove("active-btn");
    quickBtn.classList.remove("active-btn");

    //show input panel
    inputPanel.classList.remove("hidden");

    //store current algorithm
    currentAlgorithm = algorithm;

    if (algorithm === "linear") {
        linearBtn.classList.add("active-btn");
        loadLinearCode();
    }

    if (algorithm === "binary") {
        binaryBtn.classList.add("active-btn");
        loadBinaryCode();
    }
    if (algorithm === "quick") {
        quickBtn.classList.add("active-btn");
        loadQuickCode();
    }
}


//when button is pressed
linearBtn.addEventListener("click", () => {
    selectAlgorithm("linear");
});

binaryBtn.addEventListener("click", () => {
    selectAlgorithm("binary");
});

quickBtn.addEventListener("click", () => {
    selectAlgorithm("quick");
});


function createArray(array) {
    arrayContainer.innerHTML = "";
    array.forEach(value => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 20}px`;
        bar.textContent = value;
        arrayContainer.appendChild(bar);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//code highlighting
function highlightLine(lineId) {
    document.querySelectorAll(".code-line")
        .forEach(line => {
            line.classList.remove("active-line");
        });
    const activeLine = document.getElementById(lineId);
    if (activeLine) {
        activeLine.classList.add("active-line");
    }
}

function loadLinearCode() {
    const codeContent = 
        document.getElementById("codeContent");

    codeContent.innerHTML = `
        <div class="code-line" id="line-1">
            for each element in array
        </div>

        <div class="code-line" id="line-2">
            if element == target
        </div>

        <div class="code-line" id="line-3">
            return index
        </div>
    `;
}

function loadBinaryCode() {
    const codeContent =
        document.getElementById("codeContent");

    codeContent.innerHTML = `
        <div class="code-line" id="line-1">
            set left = 0
        </div>

        <div class="code-line" id="line-2">
            set right = array.length - 1
        </div>

        <div class="code-line" id="line-3">
            while left <= right
        </div>

        <div class="code-line" id="line-4">
            mid = Math.floor((left + right) / 2)
        </div>

        <div class="code-line" id="line-5">
            if array[mid] == target
        </div>

        <div class="code-line" id="line-6">
            move left/right boundary
        </div>
    `;
}

function loadQuickCode() {
    const codeContent =
        document.getElementById("codeContent");

    codeContent.innerHTML = `
        <div class="code-line" id="line-1">
            choose pivot
        </div>

        <div class="code-line" id="line-2">
            partition array
        </div>

        <div class="code-line" id="line-3">
            place pivot correctly
        </div>

        <div class="code-line" id="line-4">
            recursively sort left
        </div>

        <div class="code-line" id="line-5">
            recursively sort right
        </div>
    `;
}

async function linearSearch(array, target) {
    const bars = document.querySelectorAll(".bar");

    for (let i = 0; i < array.length; i++) {
        highlightLine("line-1");
        bars[i].style.background = "red";
        await sleep(700);
        highlightLine("line-2");

        if (array[i] === target) {
            bars[i].style.background = "blue";
            highlightLine("line-3");
            return;
        }
        bars[i].style.background = "#22c55e";
    }
}

async function binarySearch(array, target) {
    array.sort((a, b) => a - b);
    createArray(array);
    const bars = document.querySelectorAll(".bar");

    let left = 0;
    let right = array.length - 1;

    highlightLine("line-1");
    await sleep(500);

    highlightLine("line-2");
    await sleep(500);

    while (left <= right) {
        highlightLine("line-3");
        const mid = Math.floor((left + right) / 2);
        highlightLine("line-4");
        
        // reset colors
        bars.forEach(bar => {
            bar.style.background = "#22c55e";
        });

        // highlight pointers
        bars[left].style.background = "orange";
        bars[right].style.background = "purple";
        bars[mid].style.background = "red";

        await sleep(1000);
        highlightLine("line-5");

        if (array[mid] === target) {
            bars[mid].style.background = "blue";
            return;
        }

        highlightLine("line-6");

        if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        await sleep(1000);
    }
}

async function quickSort(array, low, high) {
    if (low < high) {
        const pivotIndex =
            await partition(array, low, high);
        await quickSort(array, low, pivotIndex - 1);
        await quickSort(array, pivotIndex + 1, high);
    }
}

async function partition(array, low, high) {
    const bars = document.querySelectorAll(".bar");
    highlightLine("line-1");

    let pivot = array[high];
    bars[high].style.background = "red";

    let i = low - 1;
    for (let j = low; j < high; j++) {
        highlightLine("line-2");
        bars[j].style.background = "yellow";
        await sleep(700);

        if (array[j] < pivot) {
            i++;
            // Swap values
            [array[i], array[j]] =
            [array[j], array[i]];
            // Update heights
            bars[i].style.height =
                `${array[i] * 20}px`;
            bars[j].style.height =
                `${array[j] * 20}px`;
            bars[i].textContent = array[i];
            bars[j].textContent = array[j];
            bars[i].style.background = "blue";

            await sleep(700);
        }
        bars[j].style.background = "#22c55e";
    }

    highlightLine("line-3");

    // Final pivot swap
    [array[i + 1], array[high]] =
    [array[high], array[i + 1]];

    bars[i + 1].style.height =
        `${array[i + 1] * 20}px`;

    bars[high].style.height =
        `${array[high] * 20}px`;

    bars[i + 1].textContent = array[i + 1];
    bars[high].textContent = array[high];

    await sleep(700);
    bars[i + 1].style.background = "green";
    return i + 1;
}

//main
startBtn.addEventListener("click", () => {
    // convert input into array
    const userArray = arrayInput.value
        .split(",")
        .map(num => Number(num.trim()));

    // get target
    const target = Number(targetInput.value);

    // create visualization
    createArray(userArray);

    // run selected algorithm
    if (currentAlgorithm === "linear") {
        linearSearch(userArray, target);
    }

    if (currentAlgorithm === "binary") {
        binarySearch(userArray, target);
    }

    if (currentAlgorithm === "quick") {
        quickSort(userArray, 0, userArray.length - 1);
    }
});