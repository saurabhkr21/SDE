#include<iostream>
using namespace std;
int main(){
    int w,n=2;
    cin>>w;
    int s=w-n;
    if(n%2==0 && s%2==0 && s>0){
        cout<<"YES"<<endl;
    }
    else{
        cout<<"NO";
    }
    return 0;
}