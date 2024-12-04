#!/usr/bin/env python3
"""Not an Async to return asyncio.Task"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Returns an asyncio.Task for the wait_random coroutine.

    Args:
        max_delay (int): Maximum delay for the coroutine.

    Returns:
    asyncio.Task: The asyncio.Task object wrapping the wait_random coroutine.
    """
    return asyncio.create_task(wait_random(max_delay))
