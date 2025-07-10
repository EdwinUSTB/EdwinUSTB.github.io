---
title: "Enhanced Graph Neural Networks for Knowledge Graph Reasoning"
authors:
- li-ming
- zhang-professor

author_notes:
- "Equal contribution"
- "Corresponding author"

date: "2024-07-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2024-07-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*International Conference on Machine Learning (ICML) 2024*"
publication_short: "*ICML 2024*"

abstract: "Knowledge graphs (KGs) serve as fundamental infrastructure for artificial intelligence applications, yet they often suffer from incompleteness. To address this challenge, we propose Enhanced Graph Neural Networks (EGNN) for knowledge graph reasoning. Our approach introduces a novel multi-level attention mechanism that operates at both entity and relation levels, enabling better capture of complex semantic relationships in KGs. We also design adaptive graph convolution operations that dynamically adjust convolution kernels based on different relation types. Extensive experiments on benchmark datasets demonstrate that our method achieves significant improvements over state-of-the-art approaches, with 8.5% improvement on Hit@10 for FB15k-237, 12.3% improvement on MRR for WN18RR, and 15.2% improvement on Hit@1 for YAGO3-10."

# Summary. An optional shortened abstract.
summary: "We propose Enhanced Graph Neural Networks with multi-level attention mechanisms for knowledge graph reasoning, achieving significant improvements over existing methods."

tags:
- Knowledge Graphs
- Graph Neural Networks
- Machine Learning
- Artificial Intelligence

featured: true

# links:
# - name: ""
#   url: ""
url_pdf: 'https://arxiv.org/pdf/2024.xxxxx.pdf'
url_code: 'https://github.com/nju-link/egnn-kg'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Enhanced Graph Neural Network Architecture'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project folder name, e.g. `internal-project`.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---

## 介绍

知识图谱作为结构化知识表示的重要形式，在搜索引擎、推荐系统、问答系统等领域发挥着重要作用。然而，现实世界中的知识图谱往往存在不完整性问题，需要通过推理来补全缺失的事实。

## 方法

### 多层次注意力机制

我们设计了实体级和关系级的双重注意力机制：

$$
\text{Attention}_{entity}(h_i) = \sum_{j \in N(i)} \alpha_{ij} h_j
$$

$$
\text{Attention}_{relation}(r_{ij}) = \beta_r \cdot r_{ij}
$$

### 自适应图卷积

提出了自适应图卷积操作：

$$
h_i^{(l+1)} = \sigma\left(\sum_{r \in R} \sum_{j \in N_r(i)} W_r^{(l)} h_j^{(l)}\right)
$$

## 实验结果

在多个标准数据集上的实验结果：

| 数据集 | Hit@1 | Hit@10 | MRR |
|--------|-------|--------|-----|
| FB15k-237 | 0.342 | 0.521 | 0.398 |
| WN18RR | 0.458 | 0.567 | 0.487 |
| YAGO3-10 | 0.389 | 0.612 | 0.456 |

## 结论

本研究提出的Enhanced Graph Neural Networks在知识图谱推理任务上取得了显著的性能提升，为知识图谱补全提供了新的解决方案。
