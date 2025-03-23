#include <iostream>
#include <cmath>
#include <vector>
using namespace std;

// Function to perform the Sieve of Eratosthenes to find all primes up to n
vector<bool> sieve(int n) {
    vector<bool> isPrime(n + 1, true);
    isPrime[0] = isPrime[1] = false;
    for (int i = 2; i <= sqrt(n); i++) {
        if (isPrime[i]) {
            for (int j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return isPrime; 
}

// Function to calculate the sum of powers of prime factors of x
int sumOfPrimeFactorPowers(int x, const vector<int>& primes) {
    int sum = 0;
    
    // Try dividing x by each prime number
    for (int prime : primes) {
        if (prime * prime > x) break; // No need to check beyond sqrt(x)
        
        int count = 0;
        while (x % prime == 0) {
            count++;
            x /= prime;
        }
        sum += count; // Add the power of the prime factor
    }
    
    // If x is greater than 1, it is prime itself and should be added to the sum
    if (x > 1) {
        sum += 1;
    }
    
    return sum;
}

// Function to calculate the total sum of points for all ticket numbers between a and b
int calculateTotalPoints(int a, int b) {
    // Step 1: Generate all primes up to b using Sieve of Eratosthenes
    vector<bool> isPrime = sieve(b);
    vector<int> primes;
    for (int i = 2; i <= b; i++) {
        if (isPrime[i]) {
            primes.push_back(i);
        }
    }

    // Step 2: Calculate the sum of prime factor powers for each number in the range [a, b]
    int totalPoints = 0;
    for (int i = a; i <= b; i++) {
        totalPoints += sumOfPrimeFactorPowers(i, primes);
    }

    return totalPoints;
}

int main() {
    int a, b;
    cin >> a >> b;
    
    // Calculate and output the total points
    cout << calculateTotalPoints(a, b) << endl;
    
    return 0;
}
