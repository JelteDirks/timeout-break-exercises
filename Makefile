TARGET='Short Exercises.totheme'

theme: clean
	mkdir $(TARGET)
	cp -r ./Documents $(TARGET)
	cp ./README.md $(TARGET)
	cp ./LICENSE $(TARGET)
	cp Info.json $(TARGET)

clean:
	rm -rf $(TARGET)
