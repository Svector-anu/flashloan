;; FlashLoan - Quick Loan Protocol
;; Clarity v4

(define-data-var pool-balance uint u0)
(define-constant fee-percent u1) ;; 0.1%

(define-public (deposit (amount uint))
    (begin
        (try! (stx-transfer? amount tx-sender (as-contract tx-sender)))
        (var-set pool-balance (+ (var-get pool-balance) amount))
        (ok true)
    )
)

(define-public (flash-loan (amount uint))
    (let
        (
            (balance-before (stx-get-balance (as-contract tx-sender)))
            (fee (* amount fee-percent))
        )
        (asserts! (<= amount (var-get pool-balance)) (err u100))
        
        (var-set pool-balance (- (var-get pool-balance) amount))
        (try! (as-contract (stx-transfer? amount tx-sender tx-sender)))
        
        ;; Borrower must repay in same transaction
        (try! (stx-transfer? (+ amount fee) tx-sender (as-contract tx-sender)))
        
        (var-set pool-balance (+ (var-get pool-balance) amount fee))
        (ok true)
    )
)

(define-read-only (get-pool-balance)
    (ok (var-get pool-balance))
)
