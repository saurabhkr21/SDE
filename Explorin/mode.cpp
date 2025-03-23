#include<iostream>
using namespace std;
int main(){
    long long a1=1114;
    long long a2=1115;
    long long a3=1116;
    long long m=10000007;
    long long ans=0;
    int n=51;
    for(int i=3;i<=n;i++){
        ans=((a1*a2)%m*a3)%m;
        a1=a2;
        a2=a3;
        a3=ans;
    }
    cout<<ans<<endl;
    return 0;
}