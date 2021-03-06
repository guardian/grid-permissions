#!/bin/sh

BUCKET=$1

aws s3 sync . s3://$BUCKET/permissions-admin/ --exclude "node_modules/*" --exclude ".git/*" --exclude "src/*" --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
