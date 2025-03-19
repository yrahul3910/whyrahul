import React from "react";

export default [
    {
        title: "Zotero RAG System",
        info:
            <div>
                <p>
                    A work-in-progress, I'm building a RAG (Retrieval-Augmented Generation) system for my growing Zotero library, which has gotten unmanageably large. The final vision is a system that can fetch references based on descriptions of papers and a QA system that is grounded in references. I'm writing this in Rust, partially to learn the language, but also to use a low-level language so I understand details of how things work without abstractions. As part of this project, I'm writing a simple PDF parser that extracts text and parses equations from academic PDFs.
                </p>
                <p>
                    <b>Link: </b><a href="https://github.com/yrahul3910/zotero-rag">GitHub</a>
                </p>
            </div>
    },
    {
        title: "Programmable Resumes",
        info:
            <div>
                <p>
                    Not quite satisfied with the flexibility of existing resume solutions, I developed a syntax for modular resumes that are far more customizable and allow
                    for generating multiple CVs in parallel. My CVs above are generated using this syntax.
                </p>
                <p>
                    <b>Link: </b><a href="https://github.com/yrahul3910/programmable-resumes/">GitHub</a>
                </p>
            </div>
    },
    {
        title: "pysh",
        info:
            <div>
                <p>
                    A superset of Python that allows inline evaluation of Shell commands. I wrote the transpiler and a VS Code extension for
                    syntax highlighting.
                </p>
                <p>
                    <b>Link: </b><a href="https://github.com/yrahul3910/pysh">GitHub</a>
                </p>
            </div>
    },
    {
        title: "raise-utils",
        info:
            <div>
                <p>
                    A Python package written to centralize the implementations of our lab&apos;s algorithms. Currently at <a href="https://pepy.tech/project/raise-utils">50k downloads</a>.
                </p>
                <p>
                    <b>Link: </b><a href="https://pypi.org/project/raise-utils/">PyPI</a> and <a href="https://github.com/yrahul3910/raise">Code</a>
                </p>
            </div>
    },
    {
        title: "Web Dev Mini-Projects",
        info:
            <div>
                <p>
                    While learning web development at FreeCodeCamp, I developed several small projects using the MERN stack, including a URL shortener, a voting application, a rogue-like dungeon crawler game, a Simon game, and several visualization projects using D3.js
                </p>
                <p>
                    <b>Link: </b><a href="https://codepen.io/yrahul">CodePen</a>
                </p>
            </div>
    },
    {
        title: "JournalBear",
        info:
            <div>
                <p>
                    A cross-platform journal application built with Electron, encrypted by AES-256.
                </p>
                <p>
                    <b>Links: </b><a href="https://github.com/yrahul3910/journal">Code</a> and <a href="https://www.softpedia.com/get/Office-tools/Diary-Organizers-Calendar/JournalBear.shtml">Software</a>
                </p>
            </div>
    },
    {
        title: "Human Activity Data Project",
        info:
            <div>
                <p>
                    This is a fun side project I worked on. For around 10 months, I collected data on every single activity I do, with a total of 30 activity categories. I then used this data to analyze my most productive hours and built a 2-layer LSTM to predict my next activity based on the previous five.
                </p>
                <p>
                    <b>Links: </b><a href="https://github.com/yrahul3910/ActivityDataProject">Time Meter (Android)</a> | <a href="https://github.com/yrahul3910/atracker-analysis">ATracker (iOS)</a>
                </p>
            </div>
    },
    {
        title: "Machine Learning Blog",
        info:
            <div>
                <p>
                    A blog to teach machine learning to beginners in a way I believe that I would have found helpful when I had started, making sure it has the mathematical rigor, but also an intuitive explanation, and Python code.
                </p>
                <p>
                    <b>Link: </b><a href="https://beginningwithml.wordpress.com">Blog</a>.
                </p>
            </div>
    }
];
