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
            <img src="/nju-link/media/logo.png" alt="NJU-LINK Laboratory" class="main-lab-logo">
          </div>
          <div class="hero-right">
            <div class="hero-text-container">
              <h1 class="hero-title">NJU-LINK Laboratory</h1>
              <h2 class="hero-subtitle">Large-scale Intelligence and Knowledge Lab, Nanjing University</h2>
              <div class="hero-description">
                <p>
                <br>Focused on cutting-edge research and applications in artificial intelligence, covering key technological fields including embodied intelligence, large language models, and multimodal large models.</br>
                <br>The laboratory has established long-term stable partnerships with leading domestic technology companies such as Kuaishou, Alibaba, ByteDance, and Shanghai AI Lab, conducting in-depth collaborative research on world models, large model training, inference, and evaluation. The laboratory is equipped with rich computational resources and high-quality data assets, providing solid support for high-level research.</br>
                <br>We firmly believe that open collaboration and continuous exploration are the key paths to advancing artificial intelligence toward general intelligence. We welcome more like-minded partners to join us in driving technological transformation and industrial innovation in the intelligent era.</br>
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
      title: Latest News
      subtitle: Laboratory Updates & Announcements
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
      title: Research Areas
      subtitle: Our Core Research Fields
      text: |
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fas fa-robot fa-3x"></i>
              </div>
              <h4>Embodied Intelligence</h4>
              <p>Multimodal environment interaction, agent architecture and evolution, world models</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fas fa-comment-dots fa-3x"></i>
              </div>
              <h4>Large Language Models</h4>
              <p>Pre-training, code intelligence, acceleration</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fas fa-video fa-3x"></i>
              </div>
              <h4>Multimodal Large Models</h4>
              <p>Visual understanding and generation, evaluation, reasoning and alignment</p>
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
      title: Team Members
      subtitle: Our Research Team
      text: |
        <div class="people-section">
          <!-- Faculty -->
          <div class="people-group">
            <h3 class="people-group-title">Faculty</h3>
            <div class="teachers-grid">
                <div class="teacher-card">
                  <a href="https://zhaoxiangzhang.net/" target="_blank">
                    <img src="/nju-link/en/authors/zhaoxiang-zhang/avatar.jpg" alt="Prof. Zhaoxiang Zhang" class="teacher-photo">
                  </a>
                  <div class="teacher-info">
                    <h4>Prof. Zhaoxiang Zhang</h4>
                    <div class="teacher-title">PhD Supervisor · Laboratory Director</div>
                    <div class="teacher-bio"><strong>Cheung Kong Scholar of the Ministry of Education</strong>, <strong>Young Top-notch Talent of the National Ten Thousand Talents Program</strong>, <strong>New Century Excellent Talent of the Ministry of Education</strong>.
                      <br>Researcher and PhD supervisor at the <a href="https://nlpr.ia.ac.cn/cn/index.html" target="_blank">Multimodal Artificial Intelligence Systems Laboratory</a> and <a href="http://cripac.ia.ac.cn/CN/model/index.htm" target="_blank">Pattern Recognition Laboratory</a> of the Institute of Automation, Chinese Academy of Sciences,
                      Professor at <a href="http://www.ucas.ac.cn/" target="_blank">University of Chinese Academy of Sciences</a>,
                      Core member of the <a href="http://www.cebs.ac.cn/" target="_blank">Center for Excellence in Brain Science and Intelligence Technology, Chinese Academy of Sciences</a>,
                      Executive Deputy Director of the <a href="http://www.cripac.ia.ac.cn/CN/column/column144.shtml" target="_blank">Pattern Recognition Laboratory, Institute of Automation, Chinese Academy of Sciences</a>.</br>
                      <br>IEEE Senior Member, VALSE Standing AC, CCF Distinguished Member, CAAI Distinguished Member, CAAI Deputy Secretary-General, CAAI Board Member, Secretary-General of CAAI Pattern Recognition Committee</br>
                    </div>
                    <div class="teacher-research"><strong>Research Areas:</strong> Visual cognitive computing, brain-inspired learning, embodied intelligence, and visual perception and understanding for open environments</div>
                  </div>
                </div>
                <div class="teacher-card">
                  <a href="https://liujiaheng.github.io/" target="_blank">
                    <img src="/nju-link/en/authors/jiaheng-liu/avatar.jpg" alt="Asst. Prof. Jiaheng Liu" class="teacher-photo">
                  </a>
                  <div class="teacher-info">
                    <h4>Asst. Prof. Jiaheng Liu</h4>
                    <div class="teacher-title">PhD Supervisor · Executive Deputy Director</div>
                    <div class="teacher-bio"><strong>Alibaba Star</strong>, <strong>One of the founding members of Multimodal Art Projection (M-A-P)</strong>.
                      <br>In recent years, he has published more than 50 papers in top international academic journals and conferences such as ICML, NeurIPS, ICLR, ACL, CVPR, ICCV, with more than 20 first-author and corresponding-author papers, over 2000 Google Scholar citations, and received the ACL 2024 Outstanding Paper Award. He has long served as a reviewer for top international academic journals and conferences such as IEEE TPAMI, TIP, NeurIPS, ICLR, CVPR, ICCV and as an ACL ARR Area Chair, and organized large model foundation workshops at the top international academic conference ICLR.</br>
                    </div>
                    <div class="teacher-research"><strong>Research Areas:</strong> Pre-training, alignment, code intelligence, and evaluation of large language models and multimodal large models</div>
                  </div>
                </div>
            </div>
          </div>
  
          <!-- Master Students -->
          <div class="people-group">
            <h3 class="people-group-title">Master Students</h3>
            <div class="students-grid">
              <a href="www.leexeo.com" class="student-card-link">
                <div class="student-card">
                  <img src="/nju-link/en/authors/shihao-li/avatar.jpg" alt="Shihao Li" class="student-avatar">
                  <div class="student-name">Shihao Li</div>
                  <div class="student-time">2025-Present</div>
                </div>
              </a>
              <a href="/en/authors/yanghai-wang/" class="student-card-link">
                <div class="student-card">
                  <img src="/nju-link/en/authors/yanghai-wang/avatar.jpg" alt="Yanghai Wang" class="student-avatar">
                  <div class="student-name">Yanghai Wang</div>
                  <div class="student-time">2025-Present</div>
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
      title: Featured Publications
      subtitle: Our Representative Research Achievements
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
          <!-- Title Box - Independent Semi-transparent Box -->
          <div class="recruitment-title-box">
            <div class="recruitment-header">
              <h2 class="recruitment-title">Join Us</h2>
              <h3 class="recruitment-subtitle">Explore the Future of Intelligence Together</h3>
            </div>
          </div>
          
          <!-- Content Box - Independent Semi-transparent Box -->
          <div class="recruitment-content-box">
            <div class="recruitment-intro-section">
              <h4><i class="fas fa-handshake"></i> We Welcome Various Collaboration Opportunities</h4>
              <p class="recruitment-intro">
                We cordially invite outstanding talents passionate about artificial intelligence to join our research team. Whether you are a <strong>PhD student</strong>, <strong>Master student</strong>, <strong>research intern</strong>, or <strong>academic collaborator</strong>, we warmly welcome you.
              </p>
            </div>
            <div class="recruitment-advantages">
              <div class="row">
                <div class="col-md-4">
                  <div class="advantage-item">
                    <i class="fas fa-users text-primary"></i>
                    <h5>Open and Free Academic Atmosphere</h5>
                    <p>Encouraging innovative thinking, supporting flexible and remote research, creating a free academic working environment</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="advantage-item">
                    <i class="fas fa-server text-primary"></i>
                    <h5>Rich Computational Resources</h5>
                    <p>Equipped with high-performance GPU clusters, ample computing resources supporting large-scale experiments</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="advantage-item">
                    <i class="fas fa-industry text-primary"></i>
                    <h5>Deep Industry-Academia Collaboration</h5>
                    <p>Close partnerships with top companies like Kuaishou, Alibaba, ByteDance, Shanghai AI Lab</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="advantage-item">
                    <i class="fas fa-graduation-cap text-primary"></i>
                    <h5>Personalized Training Program</h5>
                    <p>Joint supervision with industry mentors, participation in cutting-edge projects, international exchange opportunities</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="advantage-item">
                    <i class="fas fa-award text-primary"></i>
                    <h5>Competitive Scholarship Benefits</h5>
                    <p>Providing competitive research stipends to ensure quality study and life</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="advantage-item">
                    <i class="fas fa-globe text-primary"></i>
                    <h5>International Exchange Opportunities</h5>
                    <p>Supporting participation in top international conferences and collaboration with world-class scholars</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="recruitment-positions">
              <h4><i class="fas fa-rocket"></i> We're Looking for Candidates Like You</h4>
              <div class="position-grid">
                <div class="position-item">
                  <span class="position-tag">PhD · Master</span>
                  <span class="position-desc">Computer Science, AI-related majors, with solid mathematical foundation and programming skills</span>
                </div>
                <div class="position-item">
                  <span class="position-tag">Research Assistant</span>
                  <span class="position-desc">Bachelor's degree or above, passionate about AI research, with good learning ability</span>
                </div>
                <div class="position-item">
                  <span class="position-tag">Collaborative Scholar</span>
                  <span class="position-desc">Research experience in related fields, looking forward to establishing long-term academic collaboration</span>
                </div>
              </div>
            </div>
            <div class="recruitment-contact-section">
              <div class="contact-box">
                <h5><i class="fas fa-envelope"></i> Contact Us</h5>
                <p>Send your CV to: <a href="liujiaheng@nju.edu.cn" class="contact-email">liujiaheng@nju.edu.cn</a></p>
                <p class="contact-note">Email subject: [Name-Application Type-Academic Background]</p>
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
