#!/usr/bin/env python3

import random
import asyncio


async def async_generator():
    """Yields random numbers from 0 to 10 waiting 1 sec each number"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
