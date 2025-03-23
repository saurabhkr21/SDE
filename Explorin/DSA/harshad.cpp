#include<iostream>
using namespace std;
int main(){
    int n,a,sum=0;
    cin>>n;
    int p=n;
    while(n>0){
        a=n%10;
        sum=sum+a;
        n=n/10;
    }
    if(p%sum==0){
        cout<<"YES";
    }
    else{
        cout<<"NO";
        }
        return 0;
}