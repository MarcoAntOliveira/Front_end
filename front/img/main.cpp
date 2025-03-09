#include <opencv2/opencv.hpp>

int main() {
    cv::Mat img = cv::imread("coffee.jpg");
    cv::Mat img_editada;
    cv::GaussianBlur(img, img_editada, cv::Size(5,5), 0);
    cv::imwrite("imagem_editada.jpg", img_editada);
    return 0;
}
