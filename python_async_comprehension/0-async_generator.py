#!/usr/bin/env python3
"""Async Generator"""

from asyncio import sleep
from random import uniform


async def async_generator():
    """function that generate 10 different yields"""
    for i in range(10):
        await sleep(0.5)
        yield uniform(0, 10)
