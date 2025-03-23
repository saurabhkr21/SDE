#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include<cmath>

using namespace std;

class Solution {
  public:
    // Function to find prime numbers up to a limit using Sieve of Eratosthenes
    vector<bool> sieve(long long n) {
        vector<bool> isPrime(n + 1, true);
        isPrime[0] = isPrime[1] = false; // 0 and 1 are not primes
        
        for (long long i = 2; i * i <= n; i++) {
            if (isPrime[i]) {
                for (long long j = i * i; j <= n; j += i) {
                    isPrime[j] = false;
                }
            }
        }
        return isPrime;
    }

    // Function to count numbers with exactly 3 divisors in the range [L, R]
    int count3DivNums(long long L, long long R) {
        long long sqrtR = sqrt(R); // We only need primes up to sqrt(R)
        
        // Step 1: Use sieve to find all primes up to sqrt(R)
        vector<bool> isPrime = sieve(sqrtR);
        
        // Step 2: Count squares of primes in the range [L, R]
        int count = 0;
        for (long long i = 2; i <= sqrtR; i++) {
            if (isPrime[i]) {
                long long square = i * i;
                if (square >= L && square <= R) {
                    count++;
                }
            }
        }
        
        return count;
    }
};

int main() {
    int t;
    cin >> t;
    while (t--) {
        long long L, R;
        cin >> L >> R;

        Solution ob;
        cout << ob.count3DivNums(L, R) << endl;

        cout << "~" << "\n";
    }
    return 0;
}
