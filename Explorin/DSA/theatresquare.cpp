#include<iostream>
using namespace std;
int main(){
    long long n,m,a;
    cin>>n>>endl;
    cin>>m>>endl;
    cin>>a>>endl;
    
    long long s=ceil(n/a)+ceil(m/a);
    cout<<s;
    return 0;
}