//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution{
public:
    long long int fibSum(long long int N){
        //code here
        if(N==0){
            return 0;
        }
        long long int a=0,b=1,sum=1;
        for (int i=2;i<=N;i++){
            long long int next=a+b;
            sum=sum+next;
            a=b;
            b=next;
            
        }
        return sum;
    }
};

//{ Driver Code Starts.
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        long long int N;
        cin>>N;
        Solution ob;
        cout << ob.fibSum(N) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends