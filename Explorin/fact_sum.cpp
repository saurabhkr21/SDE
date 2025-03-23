#include<iostream>
using namespace std;
int main(){
    int n,s=0;
    cin >>n;
    if(n==0 || n==1){
        cout<<1;
        return 0;
    }
    for(int i=1;i<=n;i++){
        int a=1,p=1;
        while(a <= i ){
            p*=a;
            a++;
        }
        s+=p;
    }
    cout <<s;
    return 0;
}