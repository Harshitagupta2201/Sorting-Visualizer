
//bubble.sort
async function bubble() {
  console.log('In bubbe()');
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length - 1; i++) {
    console.log('In ith loop');
    for (let j = 0; j < ele.length - i - 1; j++) {
      console.log('In jth loop');
      ele[j].style.background = 'brown';
      ele[j + 1].style.background = 'brown';
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        console.log('In if condition');
        await waitforme(delay);
        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background = 'Green';
      ele[j + 1].style.background = 'Green';
    }
    ele[ele.length - 1 - i].style.background = 'red';
  }
  ele[0].style.background = 'red';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function() {
  disableSortingBtn();

  disableNewArrayBtn();
  await bubble();
  enableSortingBtn();

  enableNewArrayBtn();
});

//insertion sort

async function insertion() {
  console.log('In insertion()');
  const ele = document.querySelectorAll(".bar");
  // color
  ele[0].style.background = 'green';
  for (let i = 1; i < ele.length; i++) {
    console.log('In ith loop');
    let j = i - 1;
    let key = ele[i].style.height;
    // color
    ele[i].style.background = 'blue';

    await waitforme(delay);

    while (j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))) {
      console.log('In while loop');
      // color
      ele[j].style.background = 'blue';
      ele[j + 1].style.height = ele[j].style.height;
      j--;

      await waitforme(delay);

      // color
      for (let k = i; k >= 0; k--) {
        ele[k].style.background = 'green';
      }
    }
    ele[j + 1].style.height = key;
    // color
    ele[i].style.background = 'green';
  }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function() {
  disableSortingBtn();

  disableNewArrayBtn();
  await insertion();
  enableSortingBtn();

  enableNewArrayBtn();
});

//merge sort
async function merge(ele, low, mid, high) {
  console.log('In merge()');
  console.log(`low=${low}, mid=${mid}, high=${high}`);
  const n1 = mid - low + 1;
  const n2 = high - mid;
  console.log(`n1=${n1}, n2=${n2}`);
  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await waitforme(delay);
    console.log('In merge left loop');
    console.log(ele[low + i].style.height + ' at ' + (low + i));
    // color
    ele[low + i].style.background = 'orange';
    left[i] = ele[low + i].style.height;
  }
  for (let i = 0; i < n2; i++) {
    await waitforme(delay);
    console.log('In merge right loop');
    console.log(ele[mid + 1 + i].style.height + ' at ' + (mid + 1 + i));
    // color
    ele[mid + 1 + i].style.background = 'yellow';
    right[i] = ele[mid + 1 + i].style.height;
  }
  await waitforme(delay);
  let i = 0, j = 0, k = low;
  while (i < n1 && j < n2) {
    await waitforme(delay);
    console.log('In merge while loop');
    console.log(parseInt(left[i]), parseInt(right[j]));

    // To add color for which two r being compared for merging

    if (parseInt(left[i]) <= parseInt(right[j])) {
      console.log('In merge while loop if');
      // color
      if ((n1 + n2) === ele.length) {
        ele[k].style.background = 'green';
      }
      else {
        ele[k].style.background = 'lightgreen';
      }

      ele[k].style.height = left[i];
      i++;
      k++;
    }
    else {
      console.log('In merge while loop else');
      // color
      if ((n1 + n2) === ele.length) {
        ele[k].style.background = 'green';
      }
      else {
        ele[k].style.background = 'lightgreen';
      }
      ele[k].style.height = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    await waitforme(delay);
    console.log("In while if n1 is left");
    // color
    if ((n1 + n2) === ele.length) {
      ele[k].style.background = 'green';
    }
    else {
      ele[k].style.background = 'lightgreen';
    }
    ele[k].style.height = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    await waitforme(delay);
    console.log("In while if n2 is left");
    // color
    if ((n1 + n2) === ele.length) {
      ele[k].style.background = 'green';
    }
    else {
      ele[k].style.background = 'lightgreen';
    }
    ele[k].style.height = right[j];
    j++;
    k++;
  }
}

async function mergeSort(ele, l, r) {
  console.log('In mergeSort()');
  if (l >= r) {
    console.log(`return cause just 1 elemment l=${l}, r=${r}`);
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  console.log(`left=${l} mid=${m} right=${r}`, typeof (m));
  await mergeSort(ele, l, m);
  await mergeSort(ele, m + 1, r);
  await merge(ele, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function() {
  let ele = document.querySelectorAll('.bar');
  let l = 0;
  let r = parseInt(ele.length) - 1;
  disableSortingBtn();

  disableNewArrayBtn();
  await mergeSort(ele, l, r);
  enableSortingBtn();

  enableNewArrayBtn();
});

//quick sort
async function partitionLomuto(ele, l, r) {
  console.log('In partitionLomuto()');
  let i = l - 1;
  // color pivot element
  ele[r].style.background = 'red';
  for (let j = l; j <= r - 1; j++) {
    console.log('In partitionLomuto for j');
    // color current element
    ele[j].style.background = 'yellow';
    // pauseChamp
    await waitforme(delay);

    if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
      console.log('In partitionLomuto for j if');
      i++;
      swap(ele[i], ele[j]);
      // color 
      ele[i].style.background = 'orange';
      if (i != j) ele[j].style.background = 'orange';
      // pauseChamp
      await waitforme(delay);
    }
    else {
      // color if not less than pivot
      ele[j].style.background = 'pink';
    }
  }
  i++;
  // pauseChamp
  await waitforme(delay);
  swap(ele[i], ele[r]); // pivot height one
  console.log(`i = ${i}`, typeof (i));
  // color
  ele[r].style.background = 'pink';
  ele[i].style.background = 'green';

  // pauseChamp
  await waitforme(delay);

  // color
  for (let k = 0; k < ele.length; k++) {
    if (ele[k].style.background != 'green')
      ele[k].style.background = 'cyan';
  }

  return i;
}

async function quickSort(ele, l, r) {
  console.log('In quickSort()', `l=${l} r=${r}`, typeof (l), typeof (r));
  if (l < r) {
    let pivot_index = await partitionLomuto(ele, l, r);
    await quickSort(ele, l, pivot_index - 1);
    await quickSort(ele, pivot_index + 1, r);
  }
  else {
    if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
      ele[r].style.background = 'green';
      ele[l].style.background = 'green';
    }
  }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function() {
  let ele = document.querySelectorAll('.bar');
  let l = 0;
  let r = ele.length - 1;
  disableSortingBtn();

  disableNewArrayBtn();
  await quickSort(ele, l, r);
  enableSortingBtn();

  enableNewArrayBtn();
});

//selection sort
async function selection() {
  console.log('In selection()');
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length; i++) {
    console.log('In ith loop');
    let min_index = i;
    // Change color of the position to swap with the next min
    ele[i].style.background = 'blue';
    for (let j = i + 1; j < ele.length; j++) {
      console.log('In jth loop');
      // Change color for the current comparision (in consideration for min_index)
      ele[j].style.background = 'red';

      await waitforme(delay);
      if (parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)) {
        console.log('In if condition height comparision');
        if (min_index !== i) {
          // new min_index is found so change prev min_index color back to normal
          ele[min_index].style.background = 'cyan';
        }
        min_index = j;
      }
      else {
        // if the currnent comparision is more than min_index change is back to normal
        ele[j].style.background = 'cyan';
      }
    }
    await waitforme(delay);
    swap(ele[min_index], ele[i]);
    // change the min element index back to normal as it is swapped 
    ele[min_index].style.background = 'cyan';
    // change the sorted elements color to green
    ele[i].style.background = 'green';
  }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function() {
  disableSortingBtn();

  disableNewArrayBtn();
  await selection();
  enableSortingBtn();

  enableNewArrayBtn();
});

//sorting
// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
  console.log('In swap()');

  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;

}

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn() {
  document.querySelector(".bubbleSort").disabled = true;
  document.querySelector(".insertionSort").disabled = true;
  document.querySelector(".mergeSort").disabled = true;
  document.querySelector(".quickSort").disabled = true;
  document.querySelector(".selectionSort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn() {
  document.querySelector(".bubbleSort").disabled = false;
  document.querySelector(".insertionSort").disabled = false;
  document.querySelector(".mergeSort").disabled = false;
  document.querySelector(".quickSort").disabled = false;
  document.querySelector(".selectionSort").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn() {
  document.querySelector(".newArray").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn() {
  document.querySelector(".newArray").disabled = false;
}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function waitforme(milisec) {
  return new Promise(resolve => {
    setTimeout(() => { resolve('') }, milisec);
  })
}




// Default input for waitforme function (260ms)
let delay = 26;




// Creating array to store randomly generated numbers
let array = [];

// Call to display bars right when you visit the site
createNewArray();

// To create new array input size of array
function createNewArray(noOfBars = 60) {
  // calling helper function to delete old bars from dom
  deleteChild();

  // creating an array of random numbers 
  array = [];
  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 250) + 1);
  }
  console.log(array);

  // select the div #bars element
  const bars = document.querySelector("#bars");

  // create multiple element div using loop and adding class 'bar col'
  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i] * 2}px`;
    bar.classList.add('bar');
    bar.classList.add('flex-item');
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
  }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
  const bar = document.querySelector("#bars");
  bar.innerHTML = '';
}

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function() {
  //console.log("From newArray " + arraySize.value);
  console.log("From newArray " + delay);
  enableSortingBtn();

  createNewArray(100);
});
