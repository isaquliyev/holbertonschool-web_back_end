#!/usr/bin/env python3
"""Let's execute multiple coroutines at the same time with async"""

from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """running wait_random for n times"""
    wait_list = []
    for i in range(n):
        wait_list.append(await wait_random(max_delay))
    return sorted(wait_list)
