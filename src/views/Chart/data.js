import { v4 as uuid } from 'uuid';
const msgBase = "data:image/png;base64,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";
const userBase = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAByCAMAAAC4A3VPAAAB1FBMVEUAAACqgP+Zmf+Vlf+Xl/+Tk/+Vlf+ZkP+UlP+Xl/+Tk/+Wlv+Ykv+Vlf+UlP+Wlv+Wk/+XlP+Vk/+XlP+Vlf+WlP+Vk/+Vk/+Xlf+Vk/+WlP+WlP+Vk/+WlP+WlP+Wlf+VlP+WlP+Wk/+WlP+Wlf+XlP+Wk/+VlP+XlP+WlP+VlP+WlP+WlP+VlP+WlP+Wlf+WlP+WlP+WlP+WlP+WlP+WlP+WlP+WlP+WlP+WlP+WlP+WlP+Xlf+hn/+hoP+ioP+iof+jof+jov+kov+ko/+mpP+opv+qqP+qqf+rqf+rqv+trP+vrf+vrv+wrv+wr/+ysf+zsf+4tv+6uP+9vP++vP++vf/BwP/Fw//FxP/Hxv/JyP/My//Ozf/Pzv/T0f/T0v/U0//W1P/X1v/Y1//Z2P/a2f/b2v/c2//c3P/d3P/e3f/f3v/g3v/g3//h4P/h4f/i4f/i4v/j4v/k4//k5P/l5P/l5f/m5f/m5v/n5v/n5//o6P/q6v/r6v/r6//s6//t7P/t7f/u7f/u7v/v7//w7//w8P/x8f/y8f/z8v/z8//09P/19f/29f/29v/39//4+P/5+P/5+f/6+v/7+v/7+//8/P/9/P/9/f/+/v////+i3iNxAAAAO3RSTlMABgoMFhodHh8gISIvMDIzVVZXWF5fY3t9goOSk5SWl5igoaWqsLm6vL3G1dbX2drc7O3u7/H4+fr9/nnFrYMAAAMtSURBVGje7dv5U9NAFMDxlFsFREsV5b6KgAJCFdotyo2VQwUFyq1yW6v1KFIRpFbqBRUPLv9ZE6HFplmzM7x9YcZ+f0ua4TOEIdlOXgQhooT0TGNF9VVyyGqrK4yZ6QmCaokZ5QS08oykf4LJRWYCnrkomQrG5VsIlyz5ccpimolwy5SmAOpyCNdydXIx1kg4Z4wNF2PKCPfKYsLOailB6MLf5zaHoJR7IJ4mSOmDYrwJizTF75OFBK3CPTHVgkdaUv+QxQSxYklMMmOS5uMieZagdk4kL+KSFeIagCB3QjBgk2eELGwySzBikyVCFTZZJVzBJi8L2CKpxSdJlPy/ye4Rz/r29rpntBuHtPb5f4Xy91n5k02Lu2EtNvEmbwV2ZQW6+JK3N3ci2rzDk2zd2FFoo5UfafVsKeaxciPvblG6x41c2aS0wovs/EmtkxM5/IPaMCfS9Z3aU07k6jdqq5zIwAa1ACdy7Su1NU6kN0DNGzoTYoCkY52aI3iMtAFIDq1RGwqdfDFAsuMLtY7gMdIG5AVv4TOlhdB1XdqCJHs/UeoNHSJtgd68HB8Veyz9kvKdQLfoFu8Hhbwt0mfyvVALkW6fPyLf3tJSvhtsudW1/F7W8v5yS74fblHZPOsLa7Y57GNpF/zSucf1LpSrR7bskXZy+IJgtdkn3UtL7km7LWKdtSKG/DXorRgyuSyGTL4Ri36lPeKkbXBm/jWl+ZnBm+Bk45hHpbFGWLLd9Uo1Vzsk2eB0M+RsACTHXzI1DkfaXjBmAyMHnjM2AEZOPGNsAox0uhhzgpFzTxhzgJEPWMmHYKTdyZgd7p+ElbwBdykYdTA1Cnj1uTbNIk5fh7yst009Um2qDfbmVT+iJo7Ug9+i2/vvz9G46fF+5jtXdO0TJaPkUSRr8R8MV2vx+FuDh/wajDJoMLChwVgK9vBNJf6I0XmRPIY/SKXBuJhwEn8oToPRPy0GHAU9Fqk/GB3NxRHz0EdyS3XaDh5rMV4tnts8zn9HHfao/CnKCwEFvF4IKIijvoWQwue1hxSVlzuA75+XVF7u2FMN2SWVNXWHtepqKkuyDYmRP/83me+xgO4e/l8AAAAASUVORK5CYII=";
const projectBase = "data:image/png;base64,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";
const articleBase = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAByCAYAAACP3YV9AAAJHUlEQVR42u2d63Mb1RmH9xMfGD7zgRmg8A+0Q/+WUE/GcpKmTYFhyFA6nUAKzoSG3uhQ7qRDQ2gnw2CYiWOtMDZ2Qkx8iSWbJLZja1eWL7Lki26WIsmWbOnwnm2cnOxFXtm6nLN6z8wzufjVavf36JzdPbtaS1KV2pFA5+OtfnebS5Hfa1U8PS5V9sPf48AmQJqcvJYFZKJlQzOCrGhmEg/NNdv1RJsivw4rNoWy9swUzfBg0PNk3QXCp+nnsAIdQBFFVA2aZQfNtvY9MNDzaKsin4c3LGHwNaOkZQxZ10aiKh+AN0li0HUjSTOvmsADkx0PwRj+EQbbKDwfUwf7lfjI3aMsDLSBUAfUxZ4kHou4H4aFDGGQ3DBEnVQ8nLpUdz+Gxxewi+uraJjFfSLf+0x7Ev3uX2FYnOOXW8pKbJm59BieYohxakJdWZ8rKu4LGJIouC+YT7upXc/gjI1gM0DgzNgb/XInhiPcvrLzAYl05h0nwAWdaJ/peorZN8onMRRRZ33k06zI2xiKoMDF6ntX9jEQsTmoyE/DBIB8CMMQvlceldpU+X0MQ/A5WHAo4WUqR9BLD3QCGITwBKjIFAYhPDEJQ3DGfbMo0iGgSBSJoEgERSJNIBJuGiOnQ4PEnQgQJZcgq4UsaV+8Zl27+P9afy5O0tt5UiKVtyK8KrqVI33r8+R4sB9F7ocj6jfk/OoEWS5kNBmUbHGLnDKRSGs/g9pI/n5ttcjBe/51aQRF7oW/QHC057GBpqB3vWEi8a3QsKG2FjJfbkDPFFpkR2xGG9pY1rc3yasLVw21X8amDbW14jsYZlGkTboSKtmG0FisJJrV1hI6xKNIGwc0Pck5sgWBsazBAceJ+auGWjkxa6itNeliAUXuJrEXhq0ChMWyChJfmbtsq7YepFDkLj1xfY7kYS/EsrKVNZVoVlsJa9s5cjGukHciXvKP8Cj5Avax8/mUrdeuF/Mo0oxDiodcSS2STQiJJVS4Y5BIa+nBhr62Ei7De/1a7Tb5MHk0obu9PokizSVeTYfIBgTEsggSXwr22aqthOFMROvR5dbp67i/7DISKNIo8XsQk4NjQZaFQtpUolltJWThUOW4brlWExARGNKtlhMvbqJINqzBO2EId/sBAvl1g0RaS3uivrZSbuWittevG/bBVsuJocj7YoZgiMtAKCwKSHx+ttdW7V64Ah8Gu+v4v+iU5XKiKPK+mDswzLH480lLifravTKaXbG9nhdhksFqOWvFjeYWeRSOFK9DmCkIg2ViM26QSGuvgUR97X6gPek3gW5b6zq9mbBczkozi6RivLkVsg6n1Cw3N6LkWOBbW7XVoAOOSHdb13eWfWWXsVzMNadIKmYUxCQhBJYbFhLNaqvJRys/Wq7r6dCQ1uPKvT7SjCJ/C6J8uTUShwBYvLlV7Wf62hGQqK+tBQOZMHkrPKIN6fTD1B66RjxwpBqFuZvdXhtuNpFUzPjGGolBOCwjuWWt59mp5ZFQMds8IqmYMRBDP+EswxYSzWp55VY+3hwi6XA1vhklqzAzyTKQDRvmOH8320O8IFFfyzPfpOecL/I5kHgjHyMrsMEslzMhchjOC+3U8g49qnW0SCpmPB8lEZhaZum3kGhWyzvzxQw5avNcVEiRLwa/03pXGDaWpefOgkHiC3cl6mtF4Kuk6ty76KjEm4U4odcmWGTYl9CrFnZqRSBYymjr70iRdJjxQu9ahA1lcZtItKoVhU+jE869Qfmz2BRZgI1kuZiaNUik/Cc2aagVhb7skuk2OUakrxAj9MrdDlSi1RV42hvZWlEY2Fi2PdkurMhZ2NAgg/4qBksAruYFdfW8059bMr2/x3EiZ0ppTdAOr4V+sL40VEo9UMs7fZxIrIvI3myIqLDRO4xvxcnxOfPvRvToanmGbhcvEusi8tTSEFHgujnL2FbMVGb70qChlkfkzDyc+3q4kVi388jzidtkBgJg8YLMl+cvG2o/jU8aannCzaHEus7snAOZ0xAEy9h2gryycMVWLQ9cysxxKbHuc63nElPkNkk/wNh2nPzeVKaxtpF8lQ5od5rjV893hk4QNAnBsHhB5h8WvjfUno1PGGobQQfnEht2PfLD2E0yAfebsYwVE+SPi8bvNn4YNdbWky/TKvcSG3qHwAcg6BYExeKzkGlWWw/+uz6DT/WwK/MmBMbiBZknQgOG2nejNwy1tUQkiVzcRffP1TFyA+4GZfGVEuTkkvFhDm+b1NaCz9en8Tk7e4EK+hECZPGWkamvrSb/TkziA5P2K3McgmQZBZl/MpH591UfGdPVVoOzgkrk7rsfZ5avEx/cqz3GQHtme3jIVu1+OJuYEFYil9/GooK8EKyPYbSMTH3tXqAHUvgsuhrwZxA0Snsjw3WQeSoybKh9c3lE+5lXV28XJ0jk+hvL7SBtBARRoTtcB6hkfe0b0Fv1tXb4l0Mkcv8MASpouBQHgYl7jABWMvW15fjbqs8xEoV4qoeVzDMr5jIHS7GmkyjMc3ZeW/qBDBSjmkAWMyEn4FaSq8U1Qy1lED4QZ1ZG8cG7jeS5YC85m5wi3xYimtRe+PMczMAc0d2lrn3xB2o/gXPC7nz4fm1qmrw03+9IifgobBSJoEgERSIoEkUiKBJBkQiKRJGIwOTxV/M6gzj+smxnEMBfX+8MeqU2VX4fgxAb6lBq88uHMAzBUeWj0pFA5+MYhtgcVOSnJdrgH7cxEEGHVUVWpJ0G/3ESQxEV95v3RB6e7v4Z/GcRQxGOomum6ymJbS6/3InBCAY4k/TtUED+JfywhAEJQ6lV7XpGMmsw3l7AgITZN16QrFrLzKXHoCiJIXFPkrqSyjUYd1swKO73jS2SneZSPB9jYHzSqsifSHbbgcmOh1yqux+D420qzt1P3UiVtGMR98Pw4iEMkBuGqBNpLw3sP4KXuXgYTj091IW0n0a7Mh2XMdDG7RMrHk7LHgCp8gE8NanvKUar6nlWqkVzBXoedamez3EGqLYzNlrGkLVU63ZY8fwC3rADJ9qrPAEOmdJspXo312zXE3A97HW8nrkvpmmGB4OeJyUemiaV3jaiuj+gNwPRC57wZwIooCwtg8TdTHppRlpWkFm18v8JLHMCk8efOmsAAAAASUVORK5CYII=";

const chartData = [
    {
        id: uuid(),
        title: "Visitors",
        total: 3366,
        url: userBase,
        route:'/'
    },
    {
        id: uuid(),
        title: "Messages",
        total: 520,
        url: msgBase,
        route:'/message'
    },
    {
        id: uuid(),
        title: "Projects",
        total: 245,
        url: projectBase,
        route:'/project'
    },
    {
        id: uuid(),
        title: "Articals",
        total: 330,
        url: articleBase,
        route:'/article'
    }
];
export default chartData;