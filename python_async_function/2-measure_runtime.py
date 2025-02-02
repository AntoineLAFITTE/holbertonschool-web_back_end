#!/usr/bin/env python3
"""measure runtime"""
import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the total execution time for wait_n and
    returns the average time per coroutine.

    Args:
        n (int): Number of coroutines to execute.
        max_delay (int): Maximum delay for each coroutine.

    Returns:
        float: Average runtime per coroutine.
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    total_time = end_time - start_time
    return total_time / n
