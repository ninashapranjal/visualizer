const arrayContainer = document.getElementById("array-container");

const linearBtn = document.getElementById("linearBtn");
const binaryBtn = document.getElementById("binaryBtn");
const quickBtn = document.getElementById("quickBtn");
const bubbleBtn = document.getElementById("bubbleBtn");
const selectionBtn = 
    document.getElementById("selectionBtn");
const insertionBtn =
    document.getElementById("insertionBtn");
const mergeBtn =
    document.getElementById("mergeBtn");

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
    bubbleBtn.classList.remove("active-btn");
    selectionBtn.classList.remove("active-btn");
    insertionBtn.classList.remove("active-btn");
    mergeBtn.classList.remove("active-btn");
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

    if (algorithm === "bubble") {
        bubbleBtn.classList.add("active-btn");
        loadBubbleCode();
    }

    if (algorithm === "selection") {
        selectionBtn.classList.add("active-btn");
        loadSelectionCode();
    }

    if (algorithm === "insertion") {
        insertionBtn.classList.add("active-btn");
        loadInsertionCode();
    }

    if (algorithm === "merge") {
        mergeBtn.classList.add("active-btn");
        loadMergeCode();
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

mergeBtn.addEventListener("click", () => {
    selectAlgorithm("merge");
});

bubbleBtn.addEventListener("click", () => {
    selectAlgorithm("bubble");
});

selectionBtn.addEventListener("click", () => {
    selectAlgorithm("selection");
});

insertionBtn.addEventListener("click", () => {
    selectAlgorithm("insertion");
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

function loadBubbleCode() {

    const codeContent =
        document.getElementById("codeContent");

    codeContent.innerHTML = `

        <div class="code-line" id="line-1">
            compare adjacent elements
        </div>

        <div class="code-line" id="line-2">
            if left > right
        </div>

        <div class="code-line" id="line-3">
            swap elements
        </div>

        <div class="code-line" id="line-4">
            repeat until sorted
        </div>
    `;
}

function loadInsertionCode() {

    const codeContent =
        document.getElementById("codeContent");

    codeContent.innerHTML = `

        <div class="code-line" id="line-1">
            pick current element
        </div>

        <div class="code-line" id="line-2">
            compare with previous elements
        </div>

        <div class="code-line" id="line-3">
            shift larger elements right
        </div>

        <div class="code-line" id="line-4">
            insert element correctly
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

function loadMergeCode() {

    const codeContent =
        document.getElementById("codeContent");

    codeContent.innerHTML = `

        <div class="code-line" id="line-1">
            split array into halves
        </div>

        <div class="code-line" id="line-2">
            recursively sort left half
        </div>

        <div class="code-line" id="line-3">
            recursively sort right half
        </div>

        <div class="code-line" id="line-4">
            merge sorted halves
        </div>
    `;
}

function loadSelectionCode() {

    const codeContent =
        document.getElementById("codeContent");

    codeContent.innerHTML = `

        <div class="code-line" id="line-1">
            set current minimum
        </div>

        <div class="code-line" id="line-2">
            scan remaining array
        </div>

        <div class="code-line" id="line-3">
            update minimum if needed
        </div>

        <div class="code-line" id="line-4">
            swap minimum into place
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

async function bubbleSort(array) {
    const bars = document.querySelectorAll(".bar");
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length - i - 1; j++) {
            highlightLine("line-1");

            bars[j].style.background = "red";
            bars[j + 1].style.background = "red";

            await sleep(500);

            if (array[j] > array[j + 1]) {
                highlightLine("line-2");
                [array[j], array[j + 1]] =
                [array[j + 1], array[j]];

                // update bars
                bars[j].style.height =
                    `${array[j] * 20}px`;

                bars[j + 1].style.height =
                    `${array[j + 1] * 20}px`;

                bars[j].textContent = array[j];
                bars[j + 1].textContent = array[j + 1];

                bars[j].style.background = "blue";
                bars[j + 1].style.background = "blue";

                await sleep(500);
            }

            bars[j].style.background = "#22c55e";
            bars[j + 1].style.background = "#22c55e";
        }

        bars[array.length - i - 1]
            .style.background = "green";
    }
}

async function selectionSort(array) {
    const bars = document.querySelectorAll(".bar");
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        highlightLine("line-1");
        bars[minIndex].style.background = "yellow";

        for (let j = i + 1; j < array.length; j++) {
            highlightLine("line-2");
            bars[j].style.background = "red";
            await sleep(500);
            highlightLine("line-3");
            if (array[j] < array[minIndex]) {

                bars[minIndex].style.background =
                    "#22c55e";
                minIndex = j;
                bars[minIndex].style.background =
                    "yellow";
            }
            await sleep(300);
            if (j !== minIndex) {
                bars[j].style.background = "#22c55e";
            }
        }
        highlightLine("line-4");

        // swap
        [array[i], array[minIndex]] =
        [array[minIndex], array[i]];

        bars[i].style.height =
            `${array[i] * 20}px`;

        bars[minIndex].style.height =
            `${array[minIndex] * 20}px`;

        bars[i].textContent = array[i];
        bars[minIndex].textContent = array[minIndex];

        bars[i].style.background = "green";

        await sleep(500);
    }
}

async function insertionSort(array) {
    const bars = document.querySelectorAll(".bar");
    for (let i = 1; i < array.length; i++) {
        highlightLine("line-1");
        let key = array[i];
        let j = i - 1;
        bars[i].style.background = "yellow";
        await sleep(500);
        highlightLine("line-2");

        while (j >= 0 && array[j] > key) {
            highlightLine("line-3");
            bars[j].style.background = "red";
            array[j + 1] = array[j];
            bars[j + 1].style.height =
                `${array[j + 1] * 20}px`;
            bars[j + 1].textContent =
                array[j + 1];

            await sleep(500);

            bars[j].style.background = "#22c55e";

            j--;
        }
        highlightLine("line-4");
        array[j + 1] = key;

        bars[j + 1].style.height =
            `${key * 20}px`;

        bars[j + 1].textContent = key;

        bars[j + 1].style.background = "blue";
    }
}

async function mergeSort(array, left, right) {
    if (left >= right) return;
    highlightLine("line-1");

    const mid =
        Math.floor((left + right) / 2);

    await sleep(500);
    highlightLine("line-2");
    await mergeSort(array, left, mid);
    await sleep(500);
    highlightLine("line-3");
    await mergeSort(array, mid + 1, right);
    await sleep(500);
    highlightLine("line-4");
    await merge(array, left, mid, right);
}

async function merge(array, left, mid, right) {
    const bars =
        document.querySelectorAll(".bar");

    // Highlight left side
    for (let i = left; i <= mid; i++) {
        bars[i].style.background = "blue";
    }

    // Highlight right side
    for (let i = mid + 1; i <= right; i++) {
        bars[i].style.background = "red";
    }

    await sleep(700);

    let leftArray = array.slice(left, mid + 1);
    let rightArray = array.slice(mid + 1, right + 1);

    let i = 0;
    let j = 0;
    let k = left;

    while (
        i < leftArray.length &&
        j < rightArray.length
    ) {
        if (leftArray[i] <= rightArray[j]) {
            array[k] = leftArray[i];
            i++;
        } else {
            array[k] = rightArray[j];
            j++;
        }

        // update visualization
        bars[k].style.height =
            `${array[k] * 20}px`;

        bars[k].textContent = array[k];
        bars[k].style.background = "green";
        await sleep(500);
        k++;
    }

    // remaining left side
    while (i < leftArray.length) {
        array[k] = leftArray[i];
        bars[k].style.height =
            `${array[k] * 20}px`;
        bars[k].textContent = array[k];
        bars[k].style.background = "green";

        i++;
        k++;

        await sleep(500);
    }

    // remaining right side
    while (j < rightArray.length) {
        array[k] = rightArray[j];
        bars[k].style.height =
            `${array[k] * 20}px`;
        bars[k].textContent = array[k];
        bars[k].style.background = "green";

        j++;
        k++;

        await sleep(500);
    }

    // reset colors
    for (let i = left; i <= right; i++) {
        bars[i].style.background = "#22c55e";
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
            [array[i], array[j]] =
            [array[j], array[i]];
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

    if (currentAlgorithm === "bubble") {
        bubbleSort(userArray);
    }

    if (currentAlgorithm === "selection") {
        selectionSort(userArray);
    }

    if (currentAlgorithm === "insertion") {
        insertionSort(userArray);
    }

    if (currentAlgorithm === "merge") {
        mergeSort(userArray,0,userArray.length - 1);
    }
});