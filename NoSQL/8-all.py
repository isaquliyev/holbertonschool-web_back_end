#!/usr/bin/env python3
""" List all documents in Python """


def list_all(mongo_collection):
    """Function that lists all documents in collection"""
    return mongo_collection.find()
