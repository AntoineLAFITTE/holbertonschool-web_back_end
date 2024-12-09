#!/usr/bin/env python3
"""Async Generator function"""

import random
import asyncio
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronous generator that yields random float numbers between 0 and 10.

    This generator loops 10 times, waits for 1 second asynchronously on each
    iteration,and yields a random floating-point number between 0 and 10.

    Returns:
        AsyncGenerator[float, None]: An asynchronous generator
        yielding random floats.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
