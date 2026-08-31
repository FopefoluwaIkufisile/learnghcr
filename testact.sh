#!/bin/bash
act  \
 -P self-hosted=-self-hosted \
 -P webhost=-self-hosted \
 --workflows ".github/workflows/preview-staging-pipeline.yml" \
 --eventpath "/Users/fopefoluwaikufisile/Documents/CODING/CSSA/cssa-website-next/payload.json" \
 --secret-file "/Users/fopefoluwaikufisile/Documents/CODING/CSSA/cssa-website-next/.secrets" \
 --platform ubuntu-latest="ghcr.io/catthehacker/ubuntu:act-latest" \
 --container-architecture "linux/amd64" \



