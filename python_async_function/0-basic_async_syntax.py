#!/usr/bin/env python3
"""Async syntax"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Asynchronous coroutine that waits for a random delay between 0
    and max_delay seconds (inclusive) and returns the delay.

    Args:
        max_delay (int): Max delay in seconds default is 10 seconds.

    Returns:
        float: the random delay in seconds.
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
