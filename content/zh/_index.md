---
# Leave the homepage title empty to use the site title
title:
date: 2025-07-09
type: landing

sections:
  # Hero section with lab introduction and logos
  - block: hero
    id: hero
    content:
      title: |
        <div class="hero-main">
          <div class="hero-left">
            <img src="/media/logo.png" alt="NJU-LINK实验室" class="main-lab-logo">
          </div>
          <div class="hero-right">
            <div class="hero-text-container">
              <h1 class="hero-title">NJU-LINK 实验室</h1>
              <h2 class="hero-subtitle">南京大学大规模智能与知识实验室</h2>
              <div class="hero-description">
                <p>
                <br>专注于人工智能前沿方向的研究与应用，涵盖具身智能、大语言模型以及多模态大模型等关键技术领域。</br>
                <br>实验室与快手、阿里巴巴、字节跳动、上海人工智能实验室（Shanghai AI Lab）等国内领先科技企业建立了长期稳定的合作关系，围绕世界模型、大模型训练、推理与评估等方向展开深入合作研究。实验室具备丰富的算力资源以及高质量数据资产，为高水平科研提供坚实保障。</br>
                <br>我们坚信，开放合作与持续探索是推动人工智能迈向通用智能的关键路径。欢迎更多志同道合的伙伴加入我们，共同推动智能时代的技术变革与产业创新。</br>
                </p>
              </div>
            </div>
          </div>
        </div>

    design:
      background:
        image:
          filename: school.jpg
        image_darken: 0.4
        text_color_light: true
      spacing:
        padding: ['100px', '0', '100px', '0']

  # Latest News section
  - block: collection
    id: news
    content:
      title: 最新动态
      subtitle: 实验室新闻与通知
      text: ""
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        featured: true
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: compact
      columns: '1'
      spacing:
        padding: ['20px', '0', '20px', '0']

  # Research Areas section
  - block: markdown
    id: research
    content:
      title: 研究方向
      subtitle: 我们的核心研究领域聚焦大模型技术
      text: |
        <div class="row">
          <div class="col-md-3 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fas fa-photo-video fa-3x"></i>
              </div>
              <h4>多模态</h4>
              <p>视觉语言模型 · 图像生成</p>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fa-solid fa-users-gear fa-3x"></i>
              </div>
              <h4>智能体系统</h4>
              <p>多智能体协作 · 自主决策</p>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fas fa-code fa-3x"/></i>
              </div>
              <h4>代码智能</h4>
              <p>代码生成 · 程序修复</p>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fas fa-brain fa-3x"></i>
              </div>
              <h4>推理</h4>
              <p>数学推理 · 思维链</p>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fa-solid fa-dumbbell fa-3x"></i>
              </div>
              <h4>大规模预训练</h4>
              <p>数据处理 · 分布式训练</p>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fa-solid fa-list-check fa-3x"></i>
              </div>
              <h4>评估</h4>
              <p>基准测试 · 能力评估</p>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fa-solid fa-robot fa-3x"></i>
              </div>
              <h4>具身智能</h4>
              <p>环境交互 · 世界模型</p>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fa-solid fa-cubes fa-3x"></i>
              </div>
              <h4>三维重建</h4>
              <p>点云处理 · 3D生成</p>
            </div>
          </div>
        </div>
    design:
      columns: '1'
      background:
        color: '#f8f9fa'
      spacing:
        padding: ['20px', '0', '20px', '0']

  # People section with custom layout
  - block: markdown
    id: people
    content:
      title: 团队成员
      subtitle: 我们的研究团队
      text: |
        <div class="people-section">
          <!-- 导师 -->
          <div class="people-group">
            <h3 class="people-group-title">导师</h3>
            <div class="teachers-grid">
                <div class="teacher-card">
                  <a href="https://zhaoxiangzhang.net/" target="_blank">
                    <img src="author/zhaoxiang-zhang/avatar.jpg" alt="张兆翔教授" class="teacher-photo">
                  </a>
                  <div class="teacher-info">
                    <h4>张兆翔 教授</h4>
                    <div class="teacher-title">博士生导师</div>
                    <div class="teacher-bio"><strong>教育部长江学者</strong>，<strong>国家万人计划青年拔尖人才</strong>，<strong>教育部新世纪优秀人才</strong>
                      <br><a href="https://nlpr.ia.ac.cn/cn/index.html" target="_blank">中国科学院自动化研究所多模态人工智能系统实验室</a>与<a href="http://cripac.ia.ac.cn/CN/model/index.htm" target="_blank">模式识别实验室</a>研究员、博士生导师，
                      <a href="http://www.ucas.ac.cn/" target="_blank">中国科学院大学</a>岗位教授，
                      <a href="http://www.cebs.ac.cn/" target="_blank">中国科学院脑科学与智能技术卓越创新中心</a>骨干，
                      <a href="http://www.cripac.ia.ac.cn/CN/column/column144.shtml" target="_blank">中国科学院自动化研究所模式识别实验室</a>常务副主任。</br>
                      <br>IEEE高级会员，VALSE常务AC，中国计算机学会CCF杰出会员、中国人工智能学会CAAI杰出会员、中国人工智能学会CAAI副秘书长、中国人工智能学会CAAI理事、中国人工智能学会CAAI模式识别专委会秘书长</br>
                    </div>
                    <div class="teacher-research"><strong>研究方向：</strong>视觉认知计算、类脑学习、具身智能和面向开放环境的视觉感知与理解</div>
                  </div>  
                </div>
                <div class="teacher-card">
                  <a href="https://liujiaheng.github.io/" target="_blank">
                    <img src="author/jiaheng-liu/avatar.jpg" alt="刘佳恒助理教授" class="teacher-photo">
                  </a>
                  <div class="teacher-info">
                    <h4>刘佳恒 助理教授</h4>
                    <div class="teacher-title">博士生导师 </div>
                    <div class="teacher-bio"><strong>阿里星</strong>，<strong><a href="https://huggingface.co/m-a-p" target="_blank">开源大模型组织 M-A-P</a> 的创始成员之一</strong>
                      <br>近年来，已在ICML、NeurIPS、ICLR、ACL、CVPR、ICCV等国际权威学术期刊和会议发表论文50余篇，其中一作和通讯20余篇，谷歌学术引用2000余次，并获得ACL 2024 Outstanding Paper Award (杰出论文奖)。长期担任IEEE TPAMI，TIP，NeurIPS，ICLR，CVPR，ICCV等国际权威学术期刊和会议审稿人和ACL ARR领域主席，并作为组织者在国际顶级学术会议ICLR组织大模型基座研讨会。</br>
                    </div>
                    <div class="teacher-research"><strong>研究方向：</strong>大语言模型和多模态大模型的预训练、对齐、代码智能、评估等</div>
                  </div>
                </div>
            </div>
          </div>
  
          <!-- 硕士研究生 -->
          <div class="people-group">
            <h3 class="people-group-title">硕士研究生</h3>
            <div class="students-grid">
              <a href="https://leexeo.com/" class="student-card-link" target="_blank">
                <div class="student-card">
                  <img src="author/shihao-li/avatar.jpg" alt="李世昊" class="student-avatar">
                  <div class="student-name">李世昊</div>
                  <div class="student-time">2025-至今</div>
                </div>
              </a>
              <a href="https://www.nju-link.com/zh/" class="student-card-link">
                <div class="student-card">
                  <img src="author/yanghai-wang/avatar.jpg" alt="汪洋海" class="student-avatar">
                  <div class="student-name">汪洋海</div>
                  <div class="student-time">2025-至今</div>
                </div>
              </a>
            </div>
          </div>
          
        </div>
    design:
      columns: '1'
      spacing:
        padding: ['20px', '0', '20px', '0']

  # Featured Publications
  - block: collection
    id: featured-publications
    content:
      title: 精选论文
      subtitle: 我们的代表性研究成果
      text: ""
      count: 6
      filters:
        author: ''
        category: ''
        exclude_featured: false
        featured: true
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: publication
    design:
      view: citation
      columns: '1'
      spacing:
        padding: ['20px', '0', '20px', '0']

  # Recruitment section
  - block: markdown
    id: recruitment
    content:
      title: ""
      subtitle: ""
      text: |
        <div class="recruitment-container">
          <!-- 标题框 - 独立的半透明框 -->
          <div class="recruitment-title-box">
            <div class="recruitment-header">
              <h2 class="recruitment-title">加入我们</h2>
              <h3 class="recruitment-subtitle">与我们一起探索智能的未来</h3>
            </div>
          </div>
          
          <!-- 内容框 - 独立的半透明框 -->
          <div class="recruitment-content-box">
            <div class="recruitment-intro-section">
              <h4><i class="fas fa-handshake"></i> 我们长期开放各类合作机会</h4>
              <p class="recruitment-intro">
                诚邀有志于人工智能领域的优秀人才加入我们的研究团队。无论您是<strong>博士研究生</strong>、<strong>硕士研究生</strong>、<strong>科研实习生</strong>或是<strong>学术合作者</strong>，我们都热忱欢迎您的到来。
              </p>
            </div>
            <div class="recruitment-advantages">
              <div class="row">
                <div class="col-md-4">
                  <div class="advantage-item">
                    <i class="fas fa-users text-primary"></i>
                    <h5>开放自由的学术氛围</h5>
                    <p>鼓励创新思维，支持弹性和远程科研，营造自由的学术工作环境</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="advantage-item">
                    <i class="fas fa-server text-primary"></i>
                    <h5>丰富的计算资源</h5>
                    <p>配备高性能GPU集群，充足的算力资源支撑大规模实验</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="advantage-item">
                    <i class="fas fa-industry text-primary"></i>
                    <h5>深度产学研合作</h5>
                    <p>与快手、阿里、字节、上海AI Lab等顶级企业密切合作</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="advantage-item">
                    <i class="fas fa-graduation-cap text-primary"></i>
                    <h5>个性化培养方案</h5>
                    <p>与企业导师联合指导，参与前沿项目，提供国际交流机会</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="advantage-item">
                    <i class="fas fa-award text-primary"></i>
                    <h5>优厚的奖学金待遇</h5>
                    <p>提供具有竞争力的研究津贴，保障学习生活</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="advantage-item">
                    <i class="fas fa-globe text-primary"></i>
                    <h5>国际交流机会</h5>
                    <p>支持参加国际顶级会议，与世界一流学者交流合作</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="recruitment-positions">
              <h4><i class="fas fa-rocket"></i> 我们期待这样的你</h4>
              <div class="position-grid">
                <div class="position-item">
                  <span class="position-tag">博士 · 硕士</span>
                  <span class="position-desc">计算机、AI相关专业，有扎实的数学基础和编程能力</span>
                </div>
                <div class="position-item">
                  <span class="position-tag">研究助理</span>
                  <span class="position-desc">本科及以上学历，对AI研究充满热情，具备良好的学习能力</span>
                </div>
                <div class="position-item">
                  <span class="position-tag">合作学者</span>
                  <span class="position-desc">相关领域研究经验，期待建立长期学术合作关系</span>
                </div>
              </div>
            </div>
            <div class="recruitment-contact-section">
              <div class="contact-box">
                <h5><i class="fas fa-envelope"></i> 联系我们</h5>
                <p>发送简历至：<a href="liujiaheng@nju.edu.cn" class="contact-email">liujiaheng@nju.edu.cn</a></p>
                <p class="contact-note">邮件主题请注明：【姓名-申请类型-专业背景】</p>
              </div>
            </div>
          </div>
        </div>
    design:
      background:
        image:
          filename: New_Journey_United.png
        image_darken: 0.3
        text_color_light: true
      columns: '1'
      spacing:
        padding: ['60px', '0', '60px', '0']

---
