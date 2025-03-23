#include<iostream>
using namespace std;
int digitsum(int n){
    int a,sum=0;
    while(n>0){
        a=n%10;
        sum+=a;
        n/=10;
    }
    return sum;
}
    int isDigitSumPalindrome(int n) {
        int a,sum=0,rev=0;
        sum=digitsum(n);
        int ori=sum;
    while(sum>0){
        a=sum%10;
        rev=(rev*10)+a;
        sum/=10;
    }
    if(rev==ori){
        return 1;
    }
    else{
        return 0;
    }
}
int main(){
    int n;
    cin>>n;
    cout<<isDigitSumPalindrome(n);
    return 0;
}