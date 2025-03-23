#include<iostream>
using namespace std;
int main(){
    int n=115;
    long long ans=1;
    for(int i=1;i<=n;i++){
        ans=ans*2;
    }
    cout<<ans;
    return 0;
}