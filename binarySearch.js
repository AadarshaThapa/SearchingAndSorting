var binarySearch = (arr,val) => {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start+end)/2);

    while(arr[middle] !== val && start<=end){
        if(arr[middle] > val){
            end = middle - 1;
        }else{
            start = middle + 1;
        }
        middle = Math.floor((start+end)/2);
    }
    return (arr[middle] === val) ? middle : -1
}

var foo = [1,3,6,9,13,15,17,18]

console.log(binarySearch(foo,17));
// --> 6

console.log(binarySearch(foo,100));
// --> -1
