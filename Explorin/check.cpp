#include <bits/stdc++.h> 
#include <iostream>
using namespace std;

int main() {
    //Write your code here
    int hra,da,allow,pf,basic;
    char g;
    cin>>basic;
    cin>>g;
    hra=(basic)/5;
    da=(basic)/2;
    if (g == 'A') {
        allow = 1700;
    } else if (g =='B'){
        allow=1500;
    }
    else{
        allow =1300;
    }
    pf=(basic*11)/100;
    int t=hra+da+allow-pf;
    cout<<t;
    return 0;
}