function numSort (arr){
    for (var i=0; i<arr.length; i++){
        for(var j=0; j<(arr.length-i-1); j++){
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr [j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
}

arr = [14, 21, 0, -10, -8, 4, 19];
numSort(arr);

const arr = [5,5,5,6,5,5,5,5]

function findUnique(arr){
    for (var i=0; i<arr.length; i++){
        for(var j=0; j<(arr.length-i-1); j++){
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr [j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
  const sorted = arr
 
  if(sorted[0] !== sorted[1]) return sorted[0]
  
  if(sorted[sorted.length - 1] !== sorted[sorted.length - 2]) return sorted[sorted.length - 1]
  
  for(let i = 0; i < sorted.length; i++){
    if(sorted[i] !== sorted[i - 1] && sorted[i] !== sorted[i + 1]) return sorted[i]
  }
  
  return "no unique"
}

console.log(findUnique(arr))