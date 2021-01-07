var tipuesearch = {"pages": [{'title': '4083109', 'text': 'cad2020 倉儲 \xa0 \n cad2020 網站 \xa0 \n Youtube網站 \xa0 \n', 'tags': '', 'url': '4083109.html'}, {'title': 'W1', 'text': '', 'tags': '', 'url': 'W1.html'}, {'title': 'HomeWork', 'text': '使用Soildworks及Inventer畫出零件檔和標示體積\xa0 \n 檔案連結：\xa0  39〜50雲端硬碟 \xa0 \n \n \n', 'tags': '', 'url': 'HomeWork.html'}, {'title': 'W2', 'text': 'Pdf1零件繪製流程影片 ( 37~50 ) \n No.37 \n \n No.38 \n \n No.39 \n \n No.40 \n \n No.41 \n \n No.42 \n \n No.43 \n \n No.44 \n \n No.45 \n \n No.46 \n \n No.47 \n \n No.48 \n \n No.49 \n \n No.50 \n \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W5', 'text': '確認軟體版本與授權。 \n 版本 (2018) \n \n 授權 \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W7', 'text': '利用SciTE編輯器類解譯ANSI C程序 \n 1. \xa0 從Tiny C官方網站中的下載 鏈接，可以下載\xa0 tcc-0.9.27-win64-bin.zip ，然後解壓縮放到 Y:/目錄中 \n \n \n 2. \xa0修改start.bat \n \n 3.  重新啟動 start.bat ，並在命令列輸入 tcc，若跑出如下圖: \n \n 代表命令收尋路徑已包含tcc。 \n 4.  修改SciTE編輯器中的cpp.properties， \n 作法為將功能表 Options 往下點擊 Open cpp.properties 編輯設定檔案, 並且勾選 View中的 \n Line Number 在編輯器中顯示行號, 對 476行之後的設定進行修改: \n \n 5.  完成上述設定後 ，可以在編輯器中執行hello.c，需先存成.c檔 \n \n 6. \xa0從\xa0 http://www.gnuplot.info/ \xa0下載最新的 gnuplot ，解壓縮後放在y:/目錄下， \n \n 7.  修改 start.bat\xa0 \n \n 8.  重新啟動 strat.bat 並執行 \n \n /* Runge Kutta for a set of first order differential equations */\n \n#include <stdio.h>\n#include <math.h>\n \n#define N 2 /* number of first order equations */\n#define dist 0.1 /* stepsize in t*/\n#define MAX 30.0 /* max for t */\n \nFILE *output; /* internal filename */\nFILE *output1; /* internal filename */\n// 利用 pipe 呼叫 gnuplot 繪圖\nFILE *pipe;\n \nvoid runge4(double x, double y[], double step); /* Runge-Kutta function */\ndouble f(double x, double y[], int i); /* function for derivatives */\n \nvoid main(){\n \n  double t, y[N];\n  int j;\n \n  output=fopen("osc.dat", "w"); /* external filename */\n  output1=fopen("osc1.dat", "w"); /* external filename */\n \n  y[0]=1.0; /* initial position */\n  y[1]=0.0; /* initial velocity */\n \n  //fprintf(output, "0\\t%f\\n", y[0]);\n \n  for (j=1; j*dist<=MAX ;j++) /* time loop */{\n \n    t=j*dist;\n    runge4(t, y, dist);\n    fprintf(output, "%f\\t%f\\n", t, y[0]);\n    fprintf(output1, "%f\\t%f\\n", t, y[1]);\n  }\n \n  fclose(output);\n  fclose(output1);\n \n  pipe = popen("gnuplot -persist","w");\n  //fprintf(pipe,"set term png enhanced font \\"v:/fireflysung.ttf\\" 18 \\n");\n  fprintf(pipe,"set term png enhanced font \\"y:/wqy-microhei.ttc\\" 18 \\n");\n  //fprintf(pipe,"set yrange [68:70]\\n");\n  fprintf(pipe,"set output \\"test.png\\"\\n");\n  fprintf(pipe, "plot \\"osc.dat\\" title \\"位移\\" with lines, \\"osc1.dat\\" title \\"速度\\" with lines\\n");\n  fprintf(pipe,"quit\\n");\n\n  fprintf(pipe,"quit\\n");\n  pclose(pipe);\n} \n 9.\xa0 執行完成 \n \n', 'tags': '', 'url': 'W7.html'}, {'title': '何謂工程師', 'text': '工程師兩特質 1.具有創造性 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 2.聰明創造、精巧創造 \n', 'tags': '', 'url': '何謂工程師.html'}, {'title': '分組報告', 'text': '分工內容 : 繪圖 \n 機構作動影片 :\xa0 \n \n 繪製內容 :\xa0 \n \n', 'tags': '', 'url': '分組報告.html'}, {'title': 'S型上升軌道', 'text': '零件及組合圖檔 \xa0 \n 組裝影片 : \n \n 組合圖 : \n \n 零件圖片 : \n \n', 'tags': '', 'url': 'S型上升軌道.html'}, {'title': '高爾夫球軌道及槌子', 'text': '零件及組合圖檔 \xa0 \n 組合與作動影片 : \n \n 組合圖 : \n \n 零件圖 : \n \n \n \n', 'tags': '', 'url': '高爾夫球軌道及槌子.html'}, {'title': '軌道', 'text': '零件圖檔 \xa0 \n 零件圖片 : \n \n \n \n', 'tags': '', 'url': '軌道.html'}, {'title': '偏心輪傳動機構', 'text': '零件及組合圖檔 \xa0 \n 運作影片 : \n \n 組合圖: \n \n 零件 : \n \n \n', 'tags': '', 'url': '偏心輪傳動機構.html'}, {'title': '梯形傳動機構', 'text': '零件及組合圖檔 \xa0 \n 運作影片 : \n \n 組合圖 : \n \n \n 零件圖 : \n \n \n', 'tags': '', 'url': '梯形傳動機構.html'}, {'title': 'Meeting', 'text': 'W10  分配工作與決定主題 \n \n W11  設計圖修改討論 \n \n W12  決定製作方向與模型繪製進度 \n \n W13  模擬後修改模型 \n \n W14  討論新增傳動機構 \n \n W15 \xa0設計者講解所設計的機構與運作原理 \n', 'tags': '', 'url': 'Meeting.html'}]};