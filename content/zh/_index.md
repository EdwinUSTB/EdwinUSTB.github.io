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
      subtitle: 我们的核心研究领域
      text: |
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fas fa-robot fa-3x"></i>
              </div>
              <h4>具身智能</h4>
              <p>多模态环境交互、智能体架构与进化、世界模型</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fas fa-comment-dots fa-3x"/></i>
              </div>
              <h4>大语言模型</h4>
              <p>预训练、代码智能、加速</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fas fa-video fa-3x"></i>
              </div>
              <h4>多模态大模型</h4>
              <p>视觉理解与生成、评估、推理与对齐</p>
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
                    <img src="authors/张兆翔/avatar.jpg" alt="张兆翔教授" class="teacher-photo">
                  </a>
                  <div class="teacher-info">
                    <h4>张兆翔 教授</h4>
                    <div class="teacher-title">博士生导师 · 实验室主任</div>
                    <div class="teacher-bio"><strong>教育部长江学者</strong>，<strong>国家万人计划青年拔尖人才</strong>，<strong>教育部新世纪优秀人才</strong>。
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
                    <img src="authors/刘佳恒/avatar.jpg" alt="刘佳恒助理教授" class="teacher-photo">
                  </a>
                  <div class="teacher-info">
                    <h4>刘佳恒 助理教授</h4>
                    <div class="teacher-title">博士生导师 · 实验室常务副主任</div>
                    <div class="teacher-bio"><strong>阿里星</strong>，<strong>多模态艺术投影 （M-A-P） 的创始成员之一</strong>。
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
              <a href="www.leexeo.com" class="student-card-link">
                <div class="student-card">
                  <img src="authors/李世昊/avatar.jpg" alt="李世昊" class="student-avatar">
                  <div class="student-name">李世昊</div>
                  <div class="student-time">2025-至今</div>
                </div>
              </a>
              <a href="/zh/authors/汪洋海/" class="student-card-link">
                <div class="student-card">
                  <img src="authors/汪洋海/avatar.jpg" alt="汪洋海" class="student-avatar">
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
      title: 招生信息
      subtitle: 加入我们的研究团队
      text: |
        <div class="recruitment-section">
          <div class="row">
            <div class="col-md-6">
              <div class="recruitment-card">
                <h4><i class="fas fa-user-graduate"></i> 博士研究生</h4>
                <ul>
                  <li>计算机科学、人工智能相关专业</li>
                  <li>具有扎实的数学基础和编程能力</li>
                  <li>对科研工作有浓厚兴趣</li>
                  <li>具有相关研究经验者优先</li>
                </ul>
                <p><strong>待遇：</strong>提供具有竞争力的奖学金和研究津贴</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="recruitment-card">
                <h4><i class="fas fa-user-graduate"></i> 硕士研究生</h4>
                <ul>
                  <li>计算机、数学、电子信息等相关专业</li>
                  <li>学习成绩优秀，英语水平良好</li>
                  <li>有志于AI领域的深入研究</li>
                  <li>具有团队合作精神</li>
                </ul>
                <p><strong>培养：</strong>一对一导师指导，参与前沿科研项目</p>
              </div>
            </div>
          </div>
          
          <div class="row mt-4">
            <div class="col-md-12">
              <div class="recruitment-contact">
                <h5>联系方式</h5>
                <p>如果您对加入我们的团队感兴趣，请发送简历至：<a href="mailto:recruitment@nju-link.org">recruitment@nju-link.org</a></p>
                <p>邮件主题请注明：【姓名-申请类型-专业背景】</p>
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
