#!/usr/bin/env python3
"""Async Generator function"""

import random
import asyncio
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """Yields random numbers from 0 to 10 waiting 1 sec each number"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
