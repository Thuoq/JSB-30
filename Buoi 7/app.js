
// Chữa BTVN BTVN
//  SUM = 1/1 + 1/2 + 1/3 + 1/4 + ... + 1/100
// 

var i = 1;
var sum = 0;
// var tu_so = 1;

while( i <= 100) {
    sum += (1/(i))
    i++; 
}
console.log(sum)

console.log("=================")
// lim n+1/n
// n->vocung

// var lim =( 1000+1)/1000


// console.log(lim)

// Array 

// ten_bien  0     1        2      3     4
console.log("=================")
var bags = ["Pen","book","water","c2","easer"] 

// thuoc tinh array 
console.log(bags[2])
// thuoc tinh length 
console.log(bags.length)
// lam sao de anh lay ra dc cai phan tu o vi tri index cuoi cung 
console.log(bags[bags.length -1])
// Bai tap     *    * *    *  *   *    * 
// Index       0    1 2    3  4   5    6 
var numbers = [2000,2,100,200,340,120,2100]
// number[index] 
// numbers[0] + numbers[1] + ... 
// 2863
// dung while de tinh tong ca cai mang nay 
numbers[i] // [0 -> 6]
// numbers[1] // 2
// numbers[2] // 100
var i = 0 ; 
var sum = 0;
var X = 0; 
// numbers.length = 7
// X = 1 || X = 2

// numbers.length - 1 ra vi tri cuoi cung cua mang 
// numbers.length -1 : 6
// vi tri bat dau : 0
// numbers[0] 1 
// numbers[1] 2
// numbers[2] 100
var numbers = [2000,2,100,200,340,120,2100]
console.log(numbers[0],numbers[1])
while(i <= numbers.length - 1) {  // 6 || 5
    console.log("This is index ",i) // i[0-6] // 0 //1 // 2
    //numbers[i] // numbers[0-6] // numbers[0] // numbers[1] // numbers[2]
    sum += numbers[i]
    i++ // 1 // 2
}
console.log(sum)
console.log("==============")

// var numbers = [1,2,100,200,340,120,2100] In ra cac so > 150 Goi i while + if 
// index       0 1 2 3   4   5   6    7 
var numbers = [1,2,3,100,200,340,120,2100]
var i = 0;

while(i < numbers.length) {
    
    if (numbers[i] > 150) {
        console.log(numbers[i])
    }
    i++;
}
console.log("===================")
var numbers = [1,2,100,200,340,120,2100]
// In nguoc tu 2100 120 
var end = numbers.length -1 
while(end >= 0 ) {
    console.log(numbers[end])
    end --;
}

// cho 1 so n , kiem tra so do co phai la so nguyen to hay ko ?

// n =2 la so nguyen to 
// n = 22 kp so nguyen to 
// kiem so nguyen to

// so nguyen la so > 1 va no co uoc {1,chinh no}
// [2,21]

var i = 2
var n = 5
var flag = true
while(i < n) {
    if( n % i == 0) {
       flag =false
       break;
    }
    i++;
}
if(flag) {
    console.log("this is so nguyen to ")
}else {
    console.log("this is not so nguyen to ")
}