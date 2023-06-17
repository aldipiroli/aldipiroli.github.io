---
layout: post
title: "Energy-based Out-of-distribution Detection"
date_read: 2022/07/05
date_pub: 2022
tags: [ood, image_classification ]
source_url: https://arxiv.org/pdf/2010.03759.pdf
---

### Useful Links

- [GitHub](https://github.com/wetliu/energy_ood)


## Abstract

- What is the promise of the paper?
    - The paper aims to reduce overconfidence using energy scores instead of softmax score.
    - They also aim to detect out of distribution samples using such energy function using  thresholds.

## Introduction

- What is the idea of energy based functions?
    
    "<img src="Untitled%209.png" width="512">
    
    "<img src="Untitled%2010.png" width="512">
    

## Method

- How do they use Energy as Inference-time OOD Score?
    - They use the free energy form:
        
        "<img src="Untitled%2011.png" width="512">
        
    - E(x; f) is then used to score the input.
    - In practice:
        - The input $x$ is fed to the network which outputs $c$ logits (for $c$ classes)
        - Then, in order to get the energy score, they do the following:
            
            ```python
            output = net(data) # output: NxC
            score = -(T * torch.logsumexp(output / T, dim=1))) # T=1, score: Nx1
            
            ```
            
- What is the relationship between softmax and Energy score? Why is the softmax a biased scoring function?
    
    "<img src="Untitled%2012.png" width="512">
    
    - Example:
        - Given two examples of in-distribution and out-of-distribution, we can see that their softmax score is almost identical, whereas the energy score is more distinguishable.
        
        "<img src="Untitled%2013.png" width="512">
        
- How can energy be used as a loss function during training?
    - The idea is to have the normal loss function for the class classification of in-distribution samples  and then two hinge losses for separating as much as possible the in and out of distribution samples.
        
        "<img src="Untitled%2014.png" width="512">
        
        "<img src="Untitled%2015.png" width="512">
    



## Notes of base ml theory
- Notes of Maximum Likelihood Estimation, Negative Log Likelihood (`NLL`) and Cross Entropy Loss `CrossEntropyLoss`:
    
    <!-- <img src="Untitled.png" title="" alt="Untitled" width="512"> -->
    "<img src="Untitled.png" width="512">
    
    "<img src="Untitled%201.png" width="512">
    
    "<img src="Untitled%202.png" width="512">
    
    "<img src="Untitled%203.png" width="512">
    
- What is the difference in implementation between the Negative Log Likelihood (`NLL`) and Cross Entropy Loss (`CrossEntropyLoss`) in PyTorch?
    
    "<img src="Untitled%204.png" width="512">
    
- What is the meaning of the AUROC curve?
    - Webpage of interactive example: [https://mlu-explain.github.io/roc-auc/](https://mlu-explain.github.io/roc-auc/)
    
    "<img src="Untitled%205.png" width="512">
    
    "<img src="Untitled%206.png" width="512">
    
    "<img src="Untitled%207.png" width="512">
    
    "<img src="Untitled%208.png" width="512">
    
