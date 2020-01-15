ps ax | grep java | grep -v 'grep' | cut -d '?' -f1 | xargs kill -9
java -jar forge-1.12.2-14.23.5.2768-universal.jar nogui