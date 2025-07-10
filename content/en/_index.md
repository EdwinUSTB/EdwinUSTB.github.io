---
# Leave the homepage title empty to use the site title
title:
date: 2024-07-09
type: landing

sections:
  - block: hero
    id: hero
    content:
      title: |
        <div class="university-header">
          <div class="institute-info">
            <img src="assets/media/nju_02.png" alt="School of Intelligence Science and Technology, Nanjing University" class="institute-logo">
            <span class="institute-name">School of Intelligence Science and Technology</span>
          </div>
          <div class="lab-info">
            <img src="media/logo.png" alt="NJU-LINK Laboratory" class="lab-logo">
            <span class="lab-name">NJU-LINK Laboratory</span>
          </div>
        </div>
      text: |
        **School of Intelligence Science and Technology at Nanjing University** is a leading institution for artificial intelligence education and research in China, dedicated to cultivating high-level talents with international perspectives in the field of AI.
        
        The school focuses on cutting-edge theoretical research and technological innovation in machine learning, deep learning, graph neural networks, knowledge graphs, natural language processing, and other frontier fields.
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
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
      columns: '1'

  - block: collection
    content:
      title: Latest Preprints
      text: ""
      count: 5
      filters:
        folders:
          - publication
        publication_type: 'article'
    design:
      view: citation
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'

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
                <i class="fas fa-brain fa-3x"></i>
              </div>
              <h4>Machine Learning & Deep Learning</h4>
              <p>Advanced algorithms in deep neural networks, reinforcement learning, and transfer learning</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fas fa-project-diagram fa-3x"></i>
              </div>
              <h4>Graph Neural Networks</h4>
              <p>Graph representation learning, graph convolutional networks, and spatio-temporal GNNs</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fas fa-network-wired fa-3x"></i>
              </div>
              <h4>Knowledge Graphs</h4>
              <p>Knowledge extraction, fusion, reasoning, and question answering</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fas fa-robot fa-3x"></i>
              </div>
              <h4>Natural Language Processing</h4>
              <p>Text understanding, machine translation, and dialogue systems</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fas fa-eye fa-3x"></i>
              </div>
              <h4>Computer Vision</h4>
              <p>Image recognition, object detection, and video analysis</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="research-card">
              <div class="research-icon">
                <i class="fas fa-chart-line fa-3x"></i>
              </div>
              <h4>Data Mining</h4>
              <p>Big data analysis, recommendation systems, and social network analysis</p>
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
                <img src="authors/alice-wu-吳恩達/avatar.jpg" alt="Prof. Alice Wu" class="teacher-photo">
                <div class="teacher-info">
                  <h4>Prof. Alice Wu</h4>
                  <div class="teacher-title">PhD Supervisor · Director of AI Research Center</div>
                  <div class="teacher-bio">PhD from Stanford University, with deep expertise in machine learning and deep learning, published 100+ papers in top conferences.</div>
                  <div class="teacher-research"><strong>Research Areas:</strong> Deep Learning, Machine Learning, Computer Vision</div>
                </div>
              </div>
              <div class="teacher-card">
                <img src="authors/robert-ford/avatar.jpg" alt="Prof. Robert Ford" class="teacher-photo">
                <div class="teacher-info">
                  <h4>Prof. Robert Ford</h4>
                  <div class="teacher-title">PhD Supervisor · Director of Graph Neural Networks Lab</div>
                  <div class="teacher-bio">PhD from MIT, specializing in graph neural networks and knowledge graphs research, IEEE Fellow.</div>
                  <div class="teacher-research"><strong>Research Areas:</strong> Graph Neural Networks, Knowledge Graphs, Network Analysis</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- PhD Students -->
          <div class="people-group">
            <h3 class="people-group-title">PhD Students</h3>
            <div class="students-grid">
              <div class="student-card">
                <img src="authors/nelson-bighetti/avatar.jpg" alt="Zhang San" class="student-avatar">
                <div class="student-name">Zhang San</div>
                <div class="student-time">Enrolled 2021</div>
                <div class="student-major">Machine Learning</div>
              </div>
              <div class="student-card">
                <img src="authors/alice-wu-吳恩達/avatar.jpg" alt="Li Si" class="student-avatar">
                <div class="student-name">Li Si</div>
                <div class="student-time">Enrolled 2022</div>
                <div class="student-major">Graph Neural Networks</div>
              </div>
            </div>
          </div>
          
          <!-- Master Students -->
          <div class="people-group">
            <h3 class="people-group-title">Master Students</h3>
            <div class="students-grid">
              <div class="student-card">
                <img src="authors/robert-ford/avatar.jpg" alt="Wang Wu" class="student-avatar">
                <div class="student-name">Wang Wu</div>
                <div class="student-time">Enrolled 2023</div>
                <div class="student-major">Natural Language Processing</div>
              </div>
              <div class="student-card">
                <img src="authors/nelson-bighetti/avatar.jpg" alt="Zhao Liu" class="student-avatar">
                <div class="student-name">Zhao Liu</div>
                <div class="student-time">Enrolled 2023</div>
                <div class="student-major">Computer Vision</div>
              </div>
              <div class="student-card">
                <img src="authors/alice-wu-吳恩達/avatar.jpg" alt="Qian Qi" class="student-avatar">
                <div class="student-name">Qian Qi</div>
                <div class="student-time">Enrolled 2024</div>
                <div class="student-major">Reinforcement Learning</div>
              </div>
            </div>
          </div>
          
          <!-- Alumni -->
          <div class="people-group">
            <h3 class="people-group-title">Distinguished Alumni</h3>
            <div class="students-grid">
              <div class="student-card">
                <img src="authors/robert-ford/avatar.jpg" alt="Sun Ba" class="student-avatar">
                <div class="student-name">Sun Ba</div>
                <div class="student-time">Graduated 2020</div>
                <div class="student-major">Researcher at Tencent AI Lab</div>
              </div>
              <div class="student-card">
                <img src="authors/nelson-bighetti/avatar.jpg" alt="Zhou Jiu" class="student-avatar">
                <div class="student-name">Zhou Jiu</div>
                <div class="student-time">Graduated 2019</div>
                <div class="student-major">Expert at Alibaba DAMO Academy</div>
              </div>
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
      title: Join Us
      subtitle: Become Part of Our Research Team
      text: |
        <div class="recruitment-section">
          <div class="row">
            <div class="col-md-6">
              <div class="recruitment-card">
                <h4><i class="fas fa-user-graduate"></i> PhD Students</h4>
                <ul>
                  <li>Computer Science, AI or related fields</li>
                  <li>Strong mathematical foundation and programming skills</li>
                  <li>Passionate about research work</li>
                  <li>Previous research experience preferred</li>
                </ul>
                <p><strong>Benefits:</strong> Competitive scholarships and research stipends</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="recruitment-card">
                <h4><i class="fas fa-user-graduate"></i> Master Students</h4>
                <ul>
                  <li>Computer Science, Mathematics, EE or related fields</li>
                  <li>Excellent academic record and good English proficiency</li>
                  <li>Aspiration for in-depth AI research</li>
                  <li>Team collaboration spirit</li>
                </ul>
                <p><strong>Training:</strong> One-on-one mentorship and cutting-edge research projects</p>
              </div>
            </div>
          </div>
          
          <div class="row mt-4">
            <div class="col-md-12">
              <div class="recruitment-contact">
                <h5>Contact Information</h5>
                <p>If you are interested in joining our team, please send your CV to: <a href="mailto:recruitment@nju-link.org">recruitment@nju-link.org</a></p>
                <p>Email subject: [Name-Application Type-Background]</p>
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
