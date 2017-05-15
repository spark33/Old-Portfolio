
def getLargestFile(rootDir):
	# Import the os module, for the os.walk function
	import os

	file_sizes = dict()
	 
	# Set the directory you want to start from
	for dirName, subdirList, fileList in os.walk(rootDir):
		print('Found directory: %s' % dirName)
		for fname in fileList:
			file_size = os.path.getsize(dirName + "/" + fname)
			file_sizes[fname] = file_size
			print('\t%s' % fname)
			print('\t%d' % file_size)

	for fname in sorted(file_sizes, key=file_sizes.get):
		print(fname + ": " + str(file_sizes[fname]))

# getLargestFile("/Library/WebServer/Documents/personal/v2")
