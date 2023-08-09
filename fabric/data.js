const MitochondrialDna = {
    title: 'Mitochondrial pathogenicity',
    list: [{
            item: 'Haplogrep 2',
            description: 'Haplogrep is a fast and free haplogroup classification tool.Upload your mtDNA profiles aligned to rCRS or RSRS and receive mitochondrial haplogroups in return.You can run Haplogrep graphically or download the latest version from GitHub.',
            website: 'https://haplogrep.i-med.ac.at/',
        },
        {
            item: 'HmtDB',
            description: 'HmtDB is a Human Mitochondrial Genomic Resource Based on Variability Studies, Supporting Population Genetics and Biomedical Research',
            website: 'https://www.hmtdb.uniba.it/',
        },
        {
            item: 'Mamit - Trna',
            description: 'Mamit - tRNA, a database for mammalian mitochondrial genomes, has been developed for deciphering structural features of mammalian mitochondrial tRNAs and as a helpful tool in the frame of human diseases linked to point mutations in mitochondrial tRNA genes',
            website: 'http://mamit-tRNA.u-strasbg.fr',
        },
        {
            item: 'MiSynPat',
            description: 'MiSynPat: an integrated knowledge base linking clinical, genetic, and structural data for disease - causing mutations in human mitochondrial aminoacyl - tRNA synthetases.',
            website: 'http://misynpat.org/',
        },
        {
            item: 'Mito DB',
            description: 'On the mitochondrial database you can find information regarding the clinical features seen in mitochondrial diseases.You can even test if some symptoms resemble what is seen in mitochondrial disorders.To facilitate this analyzis we created various tools to quantitatively determine if a disease could be caused by mitochondrial pathology.',
            website: 'https://www.mitodb.com/',
        },
        {
            item: 'MitoAge',
            description: 'MitoAge– a curated, publicly available database, containing an extensive collection of calculated mtDNA data records, and integrated it with longevity records.The MitoAge website also provides the basic tools for comparative analysis of mtDNA, with a special focus on animal longevity.',
            website: 'http://www.mitoage.info/',
        },
        {
            item: 'MitoGenesisDB',
            description: 'Mitochondria constitute complex and flexible cellular entities, which play crucial roles in normal and pathological cell conditions.The database MitoGenesisDB focuses on the dynamic of mitochondrial protein formation through global mRNA analyses.',
            website: 'https://www.dsimb.inserm.fr/dsimb_tools/mitgene/',
        },
        {
            item: 'MitoPhen',
            description: 'A human phenotype ontology - based approach to identify mitochondrial DNA diseases',
            website: 'https://www.mitophen.org',
        },
        {
            item: 'MitoProteome',
            description: 'MitoProteome is an object - relational mitochondrial gene / protein sequence database and annotation system.',
            website: 'http://www.mitoproteome.org/',
        },
        {
            item: 'MitoTool Database',
            description: 'MitoTool, a web - based bioinformatics platform, provides a convenient, user - friendly interface for handling human mtDNA sequence data.',
            website: 'http://www.mitotool.org/database.html',
        },
        {
            item: 'MPIC',
            description: 'Mitochondrial Protein Import Components, a Mitochondrial Protein Import Components Database for Plant and Non - Plant Species.',
            website: 'https://webapps.plantenergy.uwa.edu.au/applications/mpic/',
        },
        {
            item: 'MSeqDR mvTool',
            description: 'A mitochondrial DNA Web and API resource for comprehensive variant annotation, universal nomenclature collation, and reference genome conversion',
            website: 'https://mseqdr.org/mvtool.php',
        },
        {
            item: 'mtDB',
            description: 'Human Mitochondrial Genome Database, a resource for population genetics and medical sciences.',
            website: 'http://www.mtdb.igp.uu.se/',
        },
        {
            item: 'PhyloTree',
            description: "This website provides a comprehensive phylogenetic tree of worldwide human mitochondrial DNA variation, currently comprising over 5,400 nodes (haplogroups) with their defining mutations. As such, it gives a detailed view of the genetic evolution of humankind from a matrilineal perspective. This mtDNA tree serves as a framework for evolutionary, anthropological, medical, forensic, and genealogical researchers. Since its launch in 2008, the tree has been updated periodically to incorporate information from newly sequenced mitogenome sequences.",
            website: 'http://www.phylotree.org/',
        },
        {
            item: 'POLG Database',
            description: 'PLog is a extensible and easy to use logging library for PHP5.It supports different log - targets(file, database, syslog, network).',
            website: 'https://sourceforge.net/projects/plog/',
        },
    ]
}

const Genome = {
    title: 'Genome variants evaluation',
    list: [{
            item: 'SIFT',
            description: 'SIFT predicts whether an amino acid substitution affects protein function. SIFT prediction is based on the degree of conservation of amino acid residues in sequence alignments derived from closely related sequences, collected through PSI-BLAST. SIFT can be applied to naturally occurring nonsynonymous polymorphisms or laboratory-induced missense mutations.',
            website: 'http://sift.jcvi.org'
        },
        {
            item: 'PolyPhen2_HDIV',
            description: 'PolyPhen-2 is a tool which predicts possible impact of an amino acid substitution on the structure and function of a human protein using straightforward physical and comparative considerations.HumDiv-trained PolyPhen-2 is used for evaluating rare alleles at loci potentially involved in complex phenotypes, dense mapping of regions identified by genome-wide association studies, and analysis of natural selection from sequence data, where even mildly deleterious alleles must be treated as damaging.',
            website: 'http://genetics.bwh.harvard.edu/pph2'
        },
        {
            item: 'PolyPhen2_HVAR',
            description: 'PolyPhen-2 is a tool which predicts possible impact of an amino acid substitution on the structure and function of a human protein using straightforward physical and comparative considerations.HumVar-trained PolyPhen-2 can diagnose Mendelian diseases that requires distinguishing mutations with drastic effects from all the remaining human variation, including abundant mildly deleterious alleles.',
            website: 'http://genetics.bwh.harvard.edu/pph2'
        },
        {
            item: 'LRT',
            description: 'A likelihood ratio test (LRT) can accurately identify a subset of deleterious mutations that disrupt highly conserved amino acids within protein-coding sequences, which are likely to be unconditionally deleterious.',
            website: 'http://www.genetics.wustl.edu/jflab/lrt_query.html'
        },
        {
            item: 'MutationTaster',
            description: 'MutationTaster employs a Bayes classifier to eventually predict the disease potential of an alteration. The Bayes classifier is fed with the outcome of all tests and the features of the alterations and calculates probabilities for the alteration to be either a disease mutation or a harmless polymorphism.',
            website: 'http://www.mutationtaster.org'
        },
        {
            item: 'MutationAssessor',
            description: 'MutationAssessor predicts the functional impact of amino-acid substitutions in proteins, such as mutations discovered in cancer or missense polymorphisms. The functional impact is assessed based on evolutionary conservation of the affected amino acid in protein homologs.',
            website: 'http://mutationassessor.org'
        },
        {
            item: 'FATHMM',
            description: 'Functional Analysis through Hidden Markov Models(FATHMM) is specifically designed for non-synonymous single nucleotide variants (nsSNVs).',
            website: 'http://fathmm.biocompute.org.uk'
        },
        {
            item: 'PROVEAN',
            description: 'Protein Variation Effect Analyzer (PROVEAN) is a software tool which predicts whether an amino acid substitution or indel has an impact on the biological function of a protein. It is useful for filtering sequence variants to identify nonsynonymous or indel variants that are predicted to be functionally',
            website: 'http://provean.jcvi.org/'
        },
        {
            item: 'MetaSVM',
            description: 'MetaSVM is a ensemble scoring method for deleterious missense mutations.It integratea nine deleteriousness prediction scores and maximum minor allele frequency for more accurate and comprehensive evaluation of deleteriousness of missense mutations.',
            website: 'https://www.ncbi.nlm.nih.gov/pubmed/25552646'
        },
        {
            item: 'MetaLR',
            description: 'MetaLR is a ensemble scoring method for deleterious missense mutations. It achieves the highest discriminative power compared to all eighteen existing deleteriousness prediction scores, which demonstrated the value of combining information from multiple orthologous approaches.',
            website: 'https://www.ncbi.nlm.nih.gov/pubmed/25552646'
        },
        {
            item: 'VEST 3.0',
            description: 'The Variant Effect Scoring Tool (VEST) 3.0 is a machine learning method that predicts the functional significance of missense mutations observed through genome sequencing, allowing mutations to be prioritized in subsequent functional studies, based on the probability that they impair protein activity.',
            website: 'http://wiki.chasmsoftware.org'
        },
        {
            item: 'M-CAP',
            description: 'M-CAP is a pathogenicity classifier for rare missense variants in the human genome that is tuned to the high sensitivity required in the clinic. By combining previous pathogenicity scores (including SIFT, Polyphen-2 and CADD) with novel features and a powerful model, they attain the best classifier at all thresholds, reducing a typical exome/genome rare (<1%) missense variant (VUS) list from 300 to 120, while never mistaking 95% of known pathogenic variants as benign.',
            website: 'http://bejerano.stanford.edu/MCAP'
        },
        {
            item: 'CADD',
            description: 'Combined Annotation Dependent Depletion (CADD) is a tool for scoring the deleteriousness of single nucleotide variants as well as insertion/deletions variants in the human genome. It is a framework that integrates multiple annotations into one metric by contrasting variants that survived natural selection with simulated mutations.',
            website: 'http://cadd.gs.washington.edu/'
        },
        {
            item: 'GERP++',
            description: 'GERP++ is a new tool that uses maximum likelihood evolutionary rate estimation for position-specific scoring and, in contrast to previous bottomup methods, a novel dynamic programming approach to subsequently define constrained elements. GERP++ evaluates a richer set of candidate element breakpoints and ranks them based on statistical significance, eliminating the need for biased heuristic extension techniques.',
            website: 'http://mendel.stanford.edu/SidowLab/downloads/gerp/index.html'
        },
        {
            item: 'DANN',
            description: 'DANN is a deep learning approach for annotating the pathogenicity of whole-genome genetic variants in coding and noncoding regions. DANN uses the same feature set and training data as CADD to train a deep neural network (DNN). DNNs can capture non-linear relationships among features and are better suited than SVMs for problems with a large number of samples and features.',
            website: 'https://cbcl.ics.uci.edu/public_data/DANN/'
        },
        {
            item: 'fathmm-MKL',
            description: 'fathmm-MKL is capable of predicting the functional effects of protein missense mutations by combining sequence conservation within hidden Markov models (HMMs), representing the alignment of homologous sequences and conserved protein domains, with "pathogenicity weights", representing the overall tolerance of the protein/domain to mutations.',
            website: 'http://fathmm.biocompute.org.uk'
        },
        {
            item: 'Eigen',
            description: 'Eigen is a spectral approach to the functional annotation of genetic variants in coding and noncoding regions. Eigen makes use of a variety of functional annotations in both coding and noncoding regions (such as made available by the ENCODE and Roadmap Epigenomics projects), and combines them into one single measure of functional importance.',
            website: 'http://www.columbia.edu/~ii2135/eigen.html'
        },
        {
            item: 'GenoCanyon',
            description: 'GenoCanyon is a statistical framework to predict functional non-coding regions in the human genome through integrated analysis of annotation data. Meanwhile, it is a whole-genome functional annotation approach based on unsupervised statistical learning. It integrates genomic conservation measures and biochemical annotation data to predict the functional potential at each nucleotide.',
            website: 'http://genocanyon.med.yale.edu/'
        },
        {
            item: 'fitCons',
            description: 'The fitness consequences of functional annotation(fitCons) integrates functional assays (such as ChIP-Seq) with selective pressure inferred using the INSIGHT method. The result is a score ρ in the range [0.0-1.0] that indicates the fraction of genomic positions evincing a particular pattern (or "fingerprint") of functional assay results, that are under selective pressure.',
            website: 'http://compgen.cshl.edu/fitCons/'
        },
        {
            item: 'PhyloP',
            description: 'PhyloP scores measure evolutionary conservation at individual alignment sites. And the phyloP scores are useful to evaluate signatures of selection at particular nucleotides or classes of nucleotides (e.g., third codon positions, or first positions of miRNA target sites).',
            website: 'http://compgen.bscb.cornell.edu/phast'
        },
        {
            item: 'PhastCons',
            description: 'PHAST is a freely available software package for comparative and evolutionary genomics. It consists of about half a dozen major programs, plus more than a dozen utilities for manipulating sequence alignments, phylogenetic trees, and genomic annotations.',
            website: 'http://compgen.cshl.edu/phast/'
        },
        {
            item: 'SiPhy',
            description: 'SiPhy is a approach that takes advantage of deeply sequenced clades to identify evolutionary selection by uncovering not only signatures of rate-based conservation but also substitution patterns characteristic of sequence undergoing natural selection.',
            website: 'http://portals.broadinstitute.org/genome_bio/siphy/'
        },
        {
            item: 'REVEL',
            description: 'REVEL is a new ensemble method for predicting the pathogenicity of missense variants based on a combination of scores from 13 individual tools: MutPred, FATHMM v2.3, VEST 3.0, Polyphen-2, SIFT, PROVEAN, MutationAssessor, MutationTaster, LRT, GERP++, SiPhy, phyloP, and phastCons. REVEL was trained using recently discovered pathogenic and rare neutral missense variants, excluding those previously used to train its constituent tools',
            website: 'https://sites.google.com/site/revelgenomics/'
        },
        {
            item: 'dbNSFP',
            description: 'The purpose of the dbNSFP is to provide a one-stop resource for functional predictions and annotations for human nonsynonymous single-nucleotide variants (nsSNVs) and splice-site variants (ssSNVs), and to facilitate the steps of filtering and prioritizing SNVs from a large list of SNVs discovered in an exome-sequencing study.',
            website: 'http://sites.google.com/site/jpopgen/dbNSFP'
        },
    ]

}

// Allele variants frequency
const Allele = {
    title: 'Allele variants frequency',
    list: [{
            item: '1000 Genomes',
            description: 'The 1000 Genomes Project was the first project to sequence the genomes of a large number of people, to provide a comprehensive resource on human genetic variation.In the final phase of the project, data from 2, 504 samples was combined to allow highly accurate assignment of the genotypes in each sample at all the variant sites the project discovered and the data was from 26 populations, including African, Ad Mixed American, East Asian, European, South Asian, and so on.',
            website: 'http://www.1000genomes.org/'
        },
        {
            item: 'CG69',
            description: 'The database includes 69 DNA samples sequenced using their Standard Sequencing Service, which includes whole genome sequencing, mapping of the resulting reads to a human reference genome, comprehensive detection of variations, scoring, and informative annotation.',
            website: 'http://www.completegenomics.com/public-data/69-Genomes/'
        },
        {
            item: 'dbSNP',
            description: 'The Single Nucleotide Polymorphism database(dbSNP) is a public-domain archive for a broad collection of simple genetic polymorphisms.',
            website: 'https://www.ncbi.nlm.nih.gov/snp'
        },
        {
            item: 'ESP',
            description: 'The dataset in NHLBI GO Exome Sequencing Project(ESP) is from the NHLBI GO Exome Sequencing Project and its ongoing studies which produced and provided exome variant calls for comparison.The current EVS data release(ESP6500SI-V2) is taken from 6503 samples drawn from multiple ESP cohorts and represents all of the ESP exome variant data.',
            website: 'http://evs.gs.washington.edu/EVS/'
        },
        {
            item: 'ExAC',
            description: 'The Exome Aggregation Consortium(ExAC) is a coalition of investigators seeking to aggregate and harmonize exome sequencing data from a variety of large-scale sequencing projects, and to make summary data available for the wider scientific community.The data set provided on this website spans 60, 706 unrelated individuals sequenced as part of various disease-specific and population genetic studies.',
            website: 'http://exac.broadinstitute.org/'
        },
        {
            item: 'gnomAD',
            description: 'The Genome Aggregation Database(gnomAD), is a coalition of investigators seeking to aggregate and harmonize exome and genome sequencing data from a variety of large-scale sequencing projects, and to make summary data available for the wider scientific community.The data set provided on this website spans 123, 136 exomes and 15, 496 genomes from unrelated individuals sequenced as part of various disease-specific and population genetic studies.',
            website: 'http://gnomad.broadinstitute.org/'
        },
        {
            item: 'HRC',
            description: 'The Haplotype Reference Consortium(HRC) is used for genotype imputation and phasing in other cohorts, typically genome-wide association studies(GWAS), where genotypes are available from genome-wide SNP microarrays.And it contains haplotypes from individuals with predominantly European ancestry, although the HRC includes the 1000 Genomes Project data.The first release consists of 64, 976 haplotypes at 39, 235, 157 SNPs, all with an estimated minor allele count of greater than 5.',
            website: 'http://www.haplotype-reference-consortium.org'
        },
        {
            item: 'Kaviar',
            description: 'Kaviar is a compilation of SNVs, indels, and complex variants observed in humans, designed to facilitate testing for the novelty and frequency of observed variants.Kaviar contains 162 million SNV sites(including 25 M not in dbSNP) and incorporates data from 35 projects encompassing 77, 781 individuals(13.2 K whole genome, 64.6 K exome).',
            website: 'http://db.systemsbiology.net/kaviar/'
        },
    ]
}

const GeneIntolerance = {
    title: 'Gene intolerance',
    list: [{
            item: 'heptanucleotide context intolerance score',
            description: 'The goal of the NHLBI GO Exome Sequencing Project (ESP) is to discover novel genes and mechanisms contributing to heart, lung and blood disorders by pioneering the application of next-generation sequencing of the protein coding regions of the human genome across diverse, richly-phenotyped populations and to share these datasets and findings with the scientific community to extend and enrich the diagnosis, management and treatment of heart, lung and blood disorders.',
            website: 'https://evs.gs.washington.edu/EVS/'
        },
        {
            item: 'RVIS',
            description: 'RVIS (Residual Variation Intolerance Score) is a gene score based module intended to help in the interpretation of human sequence data.',
            website: 'http://genic-intolerance.org/'
        }

    ]
}

const GeneFunctional = {
    title: 'Gene functional',
    list: [{
            item: 'Gene Ontology',
            description: 'The Gene Ontology (GO) project is a major bioinformatics initiative to develop a computational representation of our evolving knowledge of how genes encode biological functions at the molecular, cellular and tissue system levels. The project has developed formal ontologies that represent over 40,000 biological concepts, and are constantly being revised to reflect new discoveries. To date, these concepts have been used to "annotate" gene functions based on experiments reported in over 100,000 peer-reviewed scientific papers.',
            website: 'http://geneontology.org/'
        },
        {
            item: 'InterPro',
            description: 'InterPro is a resource that provides functional analysis of protein sequences by classifying them into families and predicting the presence of domains and important sites. To classify proteins in this way, InterPro uses predictive models, known as signatures, provided by several different databases (referred to as member databases) that make up the InterPro consortium. It combines signatures from multiple, diverse databases into a single searchable resource, reducing redundancy and helping users interpret their sequence analysis results.',
            website: 'http://www.ebi.ac.uk/interpro/'
        },
        {
            item: 'UniProtKB',
            description: 'The UniProt Knowledgebase (UniProtKB) is the central hub for the collection of functional information on proteins, with accurate, consistent and rich annotation. In addition to capturing the core data mandatory for each UniProtKB entry (mainly, the amino acid sequence, protein name or description, taxonomic data and citation information), as much annotation information as possible is added. This includes widely accepted biological ontologies, classifications and cross-references, and clear indications of the quality of annotation in the form of evidence attribution of experimental and computational data.',
            website: 'http://www.uniprot.org/uniprot/'
        }
    ]
}

const DiseasePhenotype = {
    title: 'Disease phenotype',
    list: [{
            item: 'ClinVar',
            description: 'ClinVar is a freely accessible, public archive of reports of the relationships among human variations and phenotypes, with supporting evidence.The database includes germline and somatic variants of any size, type or genomic location.Interpretations are submitted by clinical testing laboratories, research laboratories, locus - specific databases, OMIM, GeneReviews, UniProt, expert panels and practice guidelines.',
            website: 'https://www.ncbi.nlm.nih.gov/clinvar'
        },
        {
            item: 'HPO',
            description: 'The Human Phenotype Ontology (HPO) provides a standardized vocabulary of phenotypic abnormalities encountered in human disease. Each term in the HPO describes a phenotypic abnormality, such as atrial septal defect. The HPO is currently being developed using the medical literature, Orphanet, DECIPHER, and OMIM. HPO currently contains approximately 11,000 terms (still growing) and over 115,000 annotations to hereditary diseases. The HPO also provides a large set of HPO annotations to approximately 4000 common diseases.',
            website: 'http://human-phenotype-ontology.github.io/ '
        },
        {
            item: 'MGI',
            description: 'MGI is the international database resource for the laboratory mouse, providing integrated genetic, genomic, and biological data to facilitate the study of human health and disease.',
            website: 'http://www.informatics.jax.org/'
        },
        {
            item: 'OMIM',
            description: 'OMIM (online mendelian inheritance in man) is a comprehensive, authoritative compendium of human genes and genetic phenotypes. It contains information on all known mendelian disorders and over 15,000 genes. And it focuses on the relationship between phenotype and genotype.',
            website: 'https://omim.org/'
        }
    ]
}

const Others = {
    title: 'Others',
    list: [{
            item: 'ClinVar',
            description: 'ClinVar is a freely accessible, public archive of reports of the relationships among human variations and phenotypes, with supporting evidence.The database includes germline and somatic variants of any size, type or genomic location.Interpretations are submitted by clinical testing laboratories, research laboratories, locus - specific databases, OMIM, GeneReviews, UniProt, expert panels and practice guidelines.',
            website: 'https://www.ncbi.nlm.nih.gov/clinvar'

        },
        {
            item: 'VarCards',
            description: 'A number of genomic tools and databases were developed to facilitate the interpretation of genetic variants, especially in the coding regions.However, they were separately presented in various online websites or databases, which are inconvenient and challenging for general clinicians, geneticists, and biologists to obtain the first-hand information regarding to some of interested variants and genes.Therefore, there is a strong general demanding to develop a convenient database through which users can retrieve the general genetic and clinical knowledge for giving variants in one integrated online database.',
            website: 'http://varcards.biols.ac.cn/'
        }
    ]
}