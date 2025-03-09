cmake_minimum_required(VERSION 3.10)
project(MeuProjeto_OpenCV)

find_package(OpenCV REQUIRED)

add_executable(main main.cpp)
target_link_libraries(main ${OpenCV_LIBS})

include_directories(${OpenCV_INCLUDE_DIRS})
