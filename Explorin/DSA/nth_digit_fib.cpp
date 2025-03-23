#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int findNthDigitInFibonacci(int n) {
        if (n <= 0) return -1;
        long long a = 1, b = 1, digitCount = 0;
        if (n == 1) return 1;
        while (true) {
            string fibStr = to_string(a);
            if (digitCount + fibStr.size() >= n) {
                return fibStr[n - digitCount - 1] - '0';
            }
            digitCount += fibStr.size();
            long long next = a + b;
            a = b;
            b = next;
        }
    }
};
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        Solution ob;
        cout << ob.findNthDigitInFibonacci(n) << endl;
    }
    return 0;
}
